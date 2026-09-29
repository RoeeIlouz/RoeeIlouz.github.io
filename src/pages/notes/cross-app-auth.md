---
layout: ../../layouts/NoteLayout.astro
slug: cross-app-auth
---

ROCIs Tasks shows your classes from ROCIs Schedule in its calendar and home-screen widgets. The two apps are separate Firebase projects with separate databases, and each one's data should only ever be readable by its owner. This is how one app reads the other's data without weakening that.

## Two projects, one person

Keeping the projects separate is deliberate: each app can be developed, released and secured on its own. The cost is that "you" are two different accounts, one per project, and Schedule's Firestore rules only let a signed-in user read their own documents:

```
function isOwner(userId) {
  return request.auth != null && request.auth.uid == userId;
}

match /users/{userId} {
  allow read, write: if isOwner(userId);
  match /courses/{courseId} { allow read, write: if isOwner(userId); }
  match /events/{eventId}   { allow read, write: if isOwner(userId); }
}
```

So for Tasks to read your timetable, it has to be signed in to the Schedule project as you.

## A second Firebase app inside Tasks

Firebase lets one app initialize several projects side by side. Tasks starts a second, named Firebase app, `rocis-schedule`, with that project's configuration. When you sign in to Tasks with Google, it reuses the same Google credential to sign in to the second project as well.

For that to be accepted, the Schedule project has to trust Google sign-ins issued to the Tasks app, so the Tasks OAuth client IDs are allowlisted in Schedule's authentication settings. Nothing else changes on the Schedule side: the rules stay owner-only.

## Three places that read the schedule

**The app** uses the second Firebase app's Firestore directly.

**Home-screen widgets** are refreshed from a background isolate, a separate Dart runtime with no UI, where initializing a second Firebase SDK is slow and fragile. There, Tasks calls the Firestore REST API directly and sends the signed-in user's ID token as a bearer token. The same rules apply, because the token proves who is asking.

**The web app** uses the same REST path, which was the source of the most confusing bug in this feature.

## The web race

On the web, classes sometimes appeared and sometimes did not, usually disappearing right after a page reload.

Firebase on the web keeps you signed in across reloads, but it restores that session asynchronously. For a moment after the page loads, `currentUser` is `null` even though you are signed in. The calendar loaded in that moment, asked for an ID token, got none, sent an unauthenticated request, and the owner-only rules correctly refused it. The result was an empty timetable with no error.

The fix is to wait for the first auth state event before deciding whether a user is signed in:

```dart
if (kIsWeb && auth.currentUser == null) {
  await auth.authStateChanges().first.timeout(const Duration(seconds: 3));
}
```

The first event arrives once the stored session has been restored, or confirms there is none. The timeout keeps a genuinely signed-out page from waiting forever.

## When the schedule cannot be read

If Tasks cannot reach the Schedule project at all, it falls back to the copy of your classes that Schedule exports to your Google Calendar, converted into the same event type. It also hides that exported calendar everywhere else, so you never see each class twice.

## What I took from it

- Keep the security rules strict and make the client prove identity, instead of loosening the rules for convenience. Allowlisting the other app's OAuth clients was a one-line change that kept owner-only rules intact.
- `currentUser` is a snapshot, not an answer. On any platform that restores sessions asynchronously, wait for the first auth event before treating "no user" as "signed out".
- Background contexts deserve their own code path. The REST call with a bearer token is less elegant than the SDK, but it works the same in a widget refresh, a background isolate and a browser.

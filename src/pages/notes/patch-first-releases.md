---
layout: ../../layouts/NoteLayout.astro
slug: patch-first-releases
---

A store release for a small bug fix means a version bump, a new build, a review, and then waiting for people to update. For ROCIs Tasks and ROCIs Schedule, most fixes skip all of that.

## Patch first

Both apps ship through [Shorebird](https://shorebird.dev), which can replace the compiled Dart code of an installed release over the air. Most of the apps is Dart: the UI, the sync logic, the reminders, the translations. A fix to any of that goes out as a patch to the release people already have, and it applies the next time the app starts.

The rule I work by is simple:

- **Dart-only change** (logic, UI, strings): publish a patch to the active release. No version bump, no store review.
- **Native change** (Kotlin, Gradle, the Android manifest, new assets or plugins): cut a full release, because a patch cannot change those.

Home-screen widgets are the tricky part. They are Android `RemoteViews` drawn by native code, so a change to how a widget looks is a full release. To keep most widget work patchable, the widgets read their colors, fonts and data from values the Dart side writes, and only the layout skeleton lives in XML. Retheming the whole app, widgets included, shipped as a patch.

## Every release stays patchable

A patch can only target a release that Shorebird built. So every full release goes through `shorebird release android` and is then uploaded to Google Play with a script, rather than a plain `flutter build appbundle`. Skip that once and the next fix has to wait for another full release.

## Versions that say where a build is

Versions follow `x.y.z+build`, where each part has one meaning:

- `x`: production version, held at 0 until the public launch
- `y`: open beta
- `z`: internal testing
- `build`: the Play version code

So `0.3.2+116` is an internal build on the third beta line. Patches do not change the version. Instead, the app asks Shorebird which patch is running and shows it in Settings as `0.3.2 P3`, which is the first thing I ask for in a bug report.

## Habits that keep it safe

- **Batch, then bump.** Related work (for example, all the widgets) lands as one release instead of a version per feature, so testers are not updating every day.
- **Changelog with every patch.** Each patch gets a short user-facing changelog entry and an internal summary of the root cause and fix, in the repository next to the code.
- **Tests before anything ships.** The two apps have 600+ automated tests between them, and a patch only goes out with the whole suite and static analysis passing.
- **Read the full release list.** Once I trimmed the output of `shorebird releases list` to its last lines, missed the newest release at the top, and concluded a patch was impossible. The fix was a habit, not code: always read the whole list.

## Why it matters

The time from "a user reports a bug" to "the fix is on their phone" dropped from days to minutes, with no store review in the loop for most fixes. The more important effect is on behavior: when shipping a fix is cheap, small problems get fixed instead of queued.

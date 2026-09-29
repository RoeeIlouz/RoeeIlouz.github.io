---
layout: ../../layouts/NoteLayout.astro
slug: offline-first-sync
---

ROCIs Tasks has to work on a train with no signal, on a second phone, and in a browser at [tasks.rocisapps.com](https://tasks.rocisapps.com), and all three should agree on your list. This is how the sync works, and the bug that taught me the most about it.

## The model

The phone is the source of truth for what you see. Every task lives in a local [Hive](https://pub.dev/packages/hive_ce) box, and the UI only ever reads from there, so the app opens instantly and never shows a spinner for your own data. Firestore is a mirror that every device writes to and listens to.

Each task carries a `modifiedAt` timestamp that is bumped on every local edit. When the same task changes in two places, the newer edit wins (last-write-wins). For documents written by older app versions that never had the field, the cloud edit time falls back to the server's `updatedAt`.

Last-write-wins is simple and predictable, and for a personal task list it is the right trade. Real conflicts, two devices editing the same task within seconds, are rare, and when they happen the most recent intent is almost always the one you want.

## Three things that went wrong along the way

**Echoes.** When you tick a task, the app writes it locally and to Firestore. The Firestore listener then reports the same change back a moment later, and a stale snapshot could briefly un-tick the task. The fix is a short "pending write" window: for 15 seconds after a local change, incoming updates for that task are checked against what we just wrote instead of blindly applied.

**Resurrection.** Deleting a document is not enough. A phone that was offline still has the task, sees that the cloud is missing it, and uploads it again. Permanently deleted tasks now leave a *tombstone*: the document stays, stripped of content, with `isPurged: true`. Writes merge instead of overwrite, so no device can clear that flag, and every device that sees a tombstone deletes its local copy.

**Cost.** Checking every local task against the cloud on every launch is a read per task. The upload step keeps a per-user watermark and only checks tasks edited since the last successful run, batching the lookups 30 ids at a time and the writes 500 at a time.

## The bug: tasks the web could not see

Some tasks existed on the phone but never showed up on the web. Nothing was failing and nothing was logged.

The web app loads your list with a live Firestore query:

```dart
collection
    .where('isCompleted', isEqualTo: false)
    .where('isDeleted', isEqualTo: false)
    .snapshots();
```

That looks harmless. But in Firestore, `isEqualTo: false` only matches documents where the field **exists and is false**. A document where `isDeleted` is missing, or `null`, does not match, and it is not an error. It is simply never returned.

Some older task documents had been written before those fields were always set. The phone never noticed, because it reads from its own local copy. Every other device did, because their only view of those tasks was that query. And because of the watermark, the phone never re-uploaded them: nothing had changed locally.

## The fix

When the upload step looks up the cloud state of local tasks, it now also records whether the document is missing either query field. Those documents are re-uploaded even when the cloud copy is newer, because rewriting them with the full schema is what makes them visible again.

To reach tasks that no edit would ever touch, I bumped the watermark key to a new version. Every device does one full reconcile after updating, repairs whatever the cloud is missing, and then goes back to cheap incremental runs.

I added a regression test for exactly this case, a newer cloud copy with missing fields that must still be rewritten, next to the existing ones for "missing in cloud", "newer here" and "purged elsewhere, never resurrect".

## What I took from it

- An equality filter is also an existence filter. Any field you query on needs a guaranteed value in every document, written by every code path, including old ones.
- An offline-first client can hide sync bugs from itself. The device that has the bug is often the only one that looks fine, so test from a second, empty client.
- One-time repairs belong in the sync path, versioned, rather than in a separate migration script someone has to remember to run.

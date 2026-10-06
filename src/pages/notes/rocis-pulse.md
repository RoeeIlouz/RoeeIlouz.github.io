---
layout: ../../layouts/NoteLayout.astro
slug: rocis-pulse
---

ROCIs Apps has numbers in six places: Cloudflare for the websites, Google Analytics for clicks, RevenueCat for subscriptions, Google Play for installs and crashes, GitHub for the open-source side, and a Telegram bot (RAAPS) that posts updates. Answering "is anything working?" meant opening five dashboards. ROCIs Pulse is one private page, and one JSON endpoint, that pulls all of it together.

## The shape

It is a single Cloudflare Worker with a D1 database:

- A **cron trigger** runs once a day. Each source has a small collector that returns plain JSON, and the result is stored as one row per source per day.
- `/` serves a static dashboard that reads `/api/summary`.
- `/api/summary` is the same data as JSON, so RAAPS can put it in its Telegram digest without knowing how any of it was collected.

Storing daily snapshots matters more than it looks. GitHub only keeps 14 days of traffic, and some APIs only answer "right now". Writing a row every day is what turns those into a history.

## Failing closed

The page shows revenue, so it must never be public by accident. Cloudflare Access sits in front of it and asks for my Google login. The Worker does not trust that alone: it checks the `Cf-Access-Jwt-Assertion` header on every request, verifies the signature against the team's public keys with WebCrypto, and checks the audience and expiry. If Access is ever switched off or misconfigured, or the Access settings are empty, every request gets a 401. The first deploy went out before Access existed, and the right behaviour was that nothing worked.

RAAPS gets in the same way, with an Access service token instead of a login, so there is only one door.

## Collectors that can be missing

Each collector needs its own key, and I did not want the dashboard to wait for all of them. A collector with no key returns `undefined` and is skipped. One that throws is stored with its error and shows a red marker, while the others still update. Adding a source later is one function and one secret.

Google Analytics normally means pulling in Google's SDK. Here the Worker signs a service-account JWT itself with WebCrypto and swaps it for an access token, which is about 25 lines and no dependencies.

## What is next

Google Play crash and ANR rates through the Play Developer Reporting API, and a funnel view that lines up site visits, Play clicks, installs and subscribers for each app.

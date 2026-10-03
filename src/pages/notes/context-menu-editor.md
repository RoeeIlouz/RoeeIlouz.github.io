---
layout: ../../layouts/NoteLayout.astro
slug: context-menu-editor
---

The Windows right-click menu is built from several different places, and Windows 11 hides half of it behind "Show more options". Most tools I found each cover one part. I wanted one list for all of it, so I built [Context Menu Editor](https://github.com/RoeeIlouz/ROCIsContextMenu-Editor) as a single PowerShell script with a WPF window. You can run it with `irm https://rocisapps.com/cme | iex`, and there is a page for it under [side projects](https://rocisapps.com/side-projects.html#context-menu-editor).

## Three kinds of entries

Windows builds the menu from three different places, and each one is turned off differently:

- **Shell verbs** under `Software\Classes\<class>\shell\<verb>`. Turning one off sets a `LegacyDisable` value, so nothing is deleted.
- **Shell extension handlers** under `shellex\ContextMenuHandlers` (7-Zip, antivirus, PowerToys). Turning one off adds its CLSID to the per-user `Shell Extensions\Blocked` list.
- **Windows 11 packaged items**, which apps declare in their `AppxManifest.xml` as `windows.fileExplorerContextMenus`. They have no command line at all, only a COM handler, and they are blocked the same way as extensions.

Reading all three into one list, with the right "off" mechanism behind each switch, is most of the work.

## Registry access without the provider

All registry access goes through `Microsoft.Win32.Registry`. The PowerShell registry provider treats the `*` in `HKCU\Software\Classes\*\shell` as a wildcard, so a path that means "all files" silently matches other keys. The .NET API takes the path literally.

## Send to, and the items with no command line

Send to is a folder of shortcuts, so adding an app is easy. Windows 11 packaged items are not: Blip, for example, has a submenu of devices and no executable to point a shortcut at. The shortcut targets a small C# helper instead, which finds the item by its CLSID and calls it on the selected files the way Explorer does. Submenu entries are matched by title first and by position only as a fallback, so pairing a new device does not change where an existing shortcut sends.

The helper is compiled at runtime with `Add-Type` and cached outside the script folder, so shortcuts keep working if the editor moves.

## One script, built from many files

The source is split into small files: core functions, UI, XAML, JSON config for the tweaks list. `Compile.ps1` stitches them into the single script people run. Two details only showed up with the one-line launch:

- `irm | iex` passes a byte order mark through as code, which breaks parsing, so the output is pure ASCII and written without a BOM. The compiler refuses non-ASCII characters.
- Windows PowerShell 5.1 reads a BOM-less file as ANSI, which is only safe because of the ASCII rule.

`rocisapps.com/cme` redirects to the latest GitHub release asset, so a new release is live as soon as it is published.

## Startup time

The first version took about 2 seconds before any window appeared, and most of that was reading the registry. Two changes helped:

- **Window first.** It now opens straight away with a "reading" state, and the scan runs once the first frame is on screen. The window appears in 0.6 to 0.8 seconds, and the full list is ready at about the same total time as before.
- **Cached helper types.** Compiling the C# types cost 0.1 to 0.3 seconds on every start. They are now compiled once and loaded from a cache file in about 15 milliseconds. An elevated run never loads that cache, because an administrator process should not load code from a folder a standard user can write to.

## PowerShell traps I hit

- Variable names are case-insensitive, so a local `$s` quietly replaced a global `$S`. The shared state is now `$App`.
- A function that returns an array with `return ,$array` can come out nested after `@()` or a pipeline. Returning the array directly is safer.
- `R` is an alias for `Invoke-History`, which matters when a script defines a short helper function.
- The `` `u{...} `` Unicode escape does not exist in 5.1, so I used plain ASCII.

## Testing without touching my own menus

`-LibraryOnly` loads every function without opening the window, so the scanner and every write operation can be scripted. An early test run did write into my real Send to folder, which taught me to point tests at a temporary Send to folder and a temporary backup folder. A separate sweep opens every page of the window and fails on any error, in both PowerShell 7 and 5.1.

## Safety

Anything that is edited or deleted is exported to a `.reg` file first, and the last change can be undone from the status bar. Per-user changes need no administrator rights, and the script makes no network calls except downloading itself again when you choose "run as administrator".

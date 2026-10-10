---
layout: ../../layouts/NoteLayout.astro
slug: rocis-cad
---

ROCIs CAD is a side project: a parametric 3D modeler for Windows in the style of SolidWorks or Shapr3D, which later grew a schematic editor and a PCB editor in the same file. The interesting parts were not the buttons. They were four decisions about where the hard work should live, and what to trust.

## A kernel in a worker

The shell is Tauri 2, so it is Rust plus the system WebView2, with no bundled browser. The geometry kernel is OpenCascade compiled to WebAssembly and used through replicad, and it runs in a Web Worker so a slow boolean never freezes the UI. Sketch constraints go to planegcs, FreeCAD's 2D solver, also as WASM. The viewport is three.js and only renders when something changes. The UI is vanilla TypeScript with no framework.

Because everything is WebAssembly plus static files, `npm run build` also produces a site that runs from any host or sub-folder. The OCCT build is single-threaded, so it needs no `SharedArrayBuffer` and no special headers. On an iPad you open it in Safari and add it to the home screen, and a service worker caches the roughly 32 MB it needs for offline use.

## A document is a list of features

A model is a JSON list of features. The worker replays them in order and caches each result under a key made of everything before it, so editing the last feature recomputes only that feature. Plain numbers are stored in millimetres and degrees, so switching document units never resizes anything, and any field accepts an expression like `width/2 + 3mm`.

The catch is that features point at faces and edges that get regenerated on every rebuild. References are stored as a geometric signature (midpoint, size, type) and re-matched each time, and fillets and shells can use rules such as "top edges" instead of picking. This works until an upstream edit changes the geometry a lot. Persistent face naming is on the roadmap for exactly that reason.

## The AI only describes

The assistant (Ctrl+K) builds a part from a description, as ordinary editable features in a single undo step. It runs locally by default: a pinned llama.cpp build with Vulkan, started hidden, below normal priority, inside a Windows Job Object so it cannot outlive the app. It unloads after 15 idle minutes.

Two things make a small local model usable:

- **Constrained output.** A JSON schema per operation is compiled into a grammar, so replies are always well-formed. Build errors, holes that miss the part and cuts that remove nothing are fed back for one automatic repair.
- **Memory on an integrated GPU.** On a Radeon 880M the GPU's memory is a share of system RAM, and the engine's pinned host buffers count against it. The app asks the engine how much GPU memory is free, keeps as many mixture-of-experts layers on the GPU as fit, leaves the rest in system memory, and always passes `--no-host`. If loading still runs out, it retries once with every expert in system memory.

Schematic drafting goes one step further. The model never draws. It lists parts, each with a pin-to-net map, and the app does the layout, the stubs and the labels. Unused chip pins get no-connect markers, while forgotten supplies still show up in the rules check, which feeds back for up to two repairs. The 26B model drafts these correctly in 25 to 80 seconds. The smaller 4B-class model often does not, so the panel suggests switching.

## Trust the other tool, not yourself

For electronics the question is not whether the output looks right, but whether KiCad agrees. Exports are checked against KiCad 10 itself:

- Its netlist of an exported schematic matches ours net for net and pin for pin, including a sheet used twice with a bus.
- Its electrical rules check is clean, and its design rules check finds no errors and no schematic parity differences.
- All 33 built-in footprints match KiCad's library pad for pad, and every pad of an exported board loads exactly where it was (46 of 46).
- Gerbers load in two independent viewers, tracespace and KiCad's GerbView.

Some of it was learned by getting it wrong. The clipper2-js offsetting returns wrong shapes (an inflated rectangle loses an edge), so copper pours build their keep-outs themselves and send only unions, differences and intersections to Clipper. KiCad checks also showed that power nets nothing drives need a `PWR_FLAG`, and that net names must use KiCad's exact form (`/SIG`, `Net-(D1-A)`).

## What is next

Assemblies with mates and interference checks, then drawings with dimensions, sheet metal, and the persistent face naming above.

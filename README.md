# SecureVault — Dashboard

Live Preview
- Run locally: `npm run dev` and open the local URL printed by Vite (test in Incognito).

Design File
[- Figma / Penpot link: DESIGN_LINK](https://www.figma.com/design/05WckxqU9M51TeRvjrf4km/Capstone-Project?node-id=7-2&t=ACU509R8TEBlR94A-0)

Setup
1. Clone the repo and install:
```bash
git clone <your-repo-url>
cd securevault-dashboard
npm install
```
2. Start dev server:
```bash
npm run dev
```
3. Build for production:
```bash
npm run build
```

Tech Stack
- React
- Vite
- Vanilla CSS (no external UI frameworks)

Data
- The app uses `src/data/data.json`. Do not change the JSON structure; you may add additional nodes to test performance.

Recursive Strategy
- The UI renders the directory tree and file lists using a recursive traversal function:
  - Each node is inspected: if node.type === 'folder', the renderer recurses into node.children; if node.type === 'file', the renderer outputs a file card.
  - This results in a single, composable Folder component that calls itself for children, keeping rendering logic concise and predictable even for deep nesting.

Wildcard Feature
- The Wildcard feature allows searching across any depth of the hierarchy:
  - A recursive search function walks all nodes and matches names against a wildcard pattern (supports `*` and `?`).
  - Matching nodes are returned with their full parent path for UI breadcrumbs and highlighting.

Validation
- A small script validates file nodes in `src/data/data.json` for required fields and proper size formatting (KB/MB). Run:
```bash
node ./scripts/validateData.js
```

Pre-Submission Gatekeeper Checklist
- Repository is Public.
- Git history shows incremental progress.
- The README is replaced with professional project docs (this file).
- Design file link is included and set to public view.
- App runs in Incognito and shows no console errors.
- No restricted UI libraries used.

Contact
- For questions about the implementation or to request a walkthrough, open an issue in the repository.

[Environment]::SetEnvironmentVariable('PATH', $env:PATH + ';C:\Program Files\Git\cmd', 'User')

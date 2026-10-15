# George Read: personal website

Static site (HTML, CSS, JS). No build step.

## Publish on GitHub Pages
1. On GitHub, create a repository named `georgeyaccoup.github.io` (this gives you `https://georgeyaccoup.github.io`). Any other name also works and is served at `/<repo-name>/`.
2. Upload every file in this folder to the repository root (`index.html`, `style.css`, `app.js`, `README.md`).
3. Open **Settings → Pages**, set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`, then save.
4. Wait a minute, then open your site URL.

## Edit content
All text, projects, jobs and links are in the `DATA` object at the top of `app.js`.

## Keep your photos
Photos currently load from your old Google Sites. If that site is removed, they will break. To keep them permanently, download each image into an `images/` folder and set `img: "images/name.jpg"` in `app.js`. Do the same for your slide decks, transcript and certificate images, then link them from the Presentations section.

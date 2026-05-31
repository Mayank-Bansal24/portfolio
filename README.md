# Portfolio — Mayank Bansal

Personal portfolio site. Built with Vite + React, deployed to GitHub Pages.

**Live:** https://mayank-bansal24.github.io/portfolio/

---

## Stack

- **Framework:** Vite + React 18
- **Styling:** Vanilla CSS (CSS custom properties)
- **Animations:** CSS transitions + Intersection Observer
- **Deployment:** GitHub Actions → GitHub Pages

---

## Local development

```bash
# Clone
git clone https://github.com/Mayank-Bansal24/portfolio.git
cd portfolio

# Install
npm install

# Copy env and fill in values
cp .env.example .env

# Run dev server
npm run dev
```

Opens at `http://localhost:5173`.


## Deployment

Pushes to `main` trigger the [deploy workflow](.github/workflows/deploy.yml) automatically.

**First-time setup:**
1. Go to repo **Settings → Pages → Source: GitHub Actions**
2. Add all env vars as repository secrets
3. Push to `main` or manually trigger the workflow

Build output goes to `dist/`. Assets are fingerprinted (hash-only filenames) and JS is minified with Terser.

---

## Project structure

```
src/
  components/     # One file per section
  data/           # portfolioData.js — all content in one place
  resources/      # Source assets
public/
  *.mp4           # Demo videos (served as-is)
  profilepic.jpeg
.github/
  workflows/
    deploy.yml    # Build + deploy pipeline
```

All content (projects, experience, skills, links) lives in [`src/data/portfolioData.js`](src/data/portfolioData.js). That's the only file you need to edit for content changes.

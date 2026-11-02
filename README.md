# Dixit Kumar Jain: portfolio

Static site, no build step. Open with any static server, e.g.

```bash
python -m http.server 5510
```

- `data.js`: all content (name, about, projects, experience, skills). Edit only this to update the site.
- `index.html`: home (hero, featured work, experience, insights, about, skills, contact).
- `projects.html`: all projects with Marketing / Development filters.
- `project.html?id=<project id>`: case-study page, rendered from `data.js`.
- `assets/`: compressed copies of the Sudopers brand kit, carousels, reels and story art.

## Before publishing
Add your LinkedIn URL in `data.js` (`socials.linkedin`) to show the LinkedIn button.

## Deploy
Drag the `portfolio` folder into Netlify Drop, or push it to GitHub Pages or Vercel as a static site.

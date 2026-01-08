# Livia Hu — Portfolio Website

Static portfolio website (HTML/CSS/JS) built with Bootstrap. This repo contains a personal portfolio site with a home page, portfolio listing, contact form, and a resume page. One project page is protected client-side by a password prompt.

## Quick overview

- Tech: HTML5, CSS (Bootstrap 5 + custom `css/style.css`), JavaScript (small helpers in `js/site.js`).
- Pages:
  - `index.html` — Home (hero, intro, featured projects)
  - `portfolio.html` — Portfolio grid
  - `contacts.html` — Contact form
  - `resume.html` — Full resume
  - `files/...` — Optional project files (one of which is protected)
- Assets are under `images/` and small scripts under `js/`.

## Project structure

```
index.html
portfolio.html
contacts.html
resume.html
css/
  └─ style.css
js/
  └─ site.js          # contains protectedOpen(...) password helper
images/
  └─ *.png, *.jpg
files/
  └─ Future Flood Prevention and Fund Distribution in Toronto/
       └─ FutureFloodPreventionandFundDistributioninTor.html  # protected project
README.md
```

## How to view locally

This is a static site — you can open `index.html` directly in your browser, but some browsers restrict local file access for resources; serving via a simple HTTP server is recommended.

Using Python (PowerShell):

```powershell
# from the project root (Windows PowerShell)
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Or, if you have Node.js installed, you can use a simple static server package (e.g., `http-server`).

## Password-protected project

- The Toronto Flood project is protected client-side. The protection is implemented in `js/site.js` as a simple JavaScript prompt function `protectedOpen(path, expectedPassword)`.
- Current password (as provided in project): `08152024`.
- Example link usage (already wired in `index.html` and `portfolio.html`):

```html
<a href="#" onclick="return protectedOpen('files/Future Flood Prevention and Fund Distribution in Toronto/FutureFloodPreventionandFundDistributioninTor.html','08152024')">View project</a>
```

Security note: This client-side protection is only an access gate in the browser; it does NOT securely protect content. Anyone can open the protected file directly if they know the path or inspect the JS. For real protection, serve the file from a server-side route that requires authentication, or use HTTP basic auth / server permissions.

## Maintenance & recommendations

- Consider renaming files and folders to remove spaces (e.g., `Future-Flood-Protection-Toronto`) to simplify linking and avoid encoding issues.
- For secure protection, move sensitive project files behind a server-side check (simple options: a small Node/Express server, GitHub Pages with an external auth layer, or a hosted solution with access control).
- Centralized styles are in `css/style.css`. Keep edits there to maintain consistent look across pages.
- If you change the password, update `js/site.js` and any links that call `protectedOpen(..., '<new-password>')`.

## Development notes

- Navbar brand triggers a `viewResume()` confirm (clicking prompts "View my resume?") and redirects to `resume.html` on confirm. That function is defined inline in the pages.
- Contact form is static and does not send email by itself — to enable sending, wire the form to a server endpoint or a service like Formspree, Netlify Forms, or similar.

## Contributing

This is a personal repo; if you'd like help or changes, open an issue or edit and submit a pull request. Keep changes small and test locally.

## License

No licence yet, all content copyrighted.

---

_Last updated: 2026-01-06_

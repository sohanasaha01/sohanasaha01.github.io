# Sohana Saha – Portfolio Website

A static website (no build step, no dependencies).

## Structure
```
sohana-portfolio/
├── index.html        page content (Summary, Work Experience, Projects, Education, Skills, Contact)
├── css/style.css     all styling, colours are variables at the top (:root)
├── js/main.js        mobile menu and active-section highlight
└── assets/favicon.svg
```

## Run locally
Open `index.html` in a browser, or from this folder run `python -m http.server 8000` and visit http://localhost:8000

## Edit
- Text: edit `index.html`.
- Colours: change the variables in `:root` at the top of `css/style.css`.

## Host for free
- **GitHub Pages:** push this folder to a repository, then Settings > Pages > deploy from the main branch.
- **Netlify or Vercel:** drag and drop the folder, or connect the repository.

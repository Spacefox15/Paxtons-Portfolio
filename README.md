# **Development Roadmap**

**Version 0.1:**
All Main Html Elements and Content
 
**Version 0.2:**
Styling

**Version 0.3:**
Dynamic Features

**Version 1.0:**
Publish

**Version 1.1:**
Mobile Version

**Version X.X:**
TBD
- Wishlist
    * TBD


Features to Add:
- Update 

---

# **Deployment**

This is a **static site**. It needs no Node runtime on the server — do not
configure it as a Node.js application or Git auto-deploy in hPanel. It is built
locally and the output is uploaded to Hostinger shared hosting by hand.

### Build

```
npm install
npm run build
```

This regenerates `dist/` — five HTML pages plus `assets/`, `css/`, `fonts/`,
`images/`, and `javascript/`.

### Upload

1. In hPanel, open **File Manager** → `public_html`.
2. Remove the previous site contents. Keep any Hostinger-generated `.htaccess`
   or `default.php` placeholder.
3. Upload **everything inside `dist/`** directly into `public_html/`.

> **Upload the _contents_ of `dist/`, not the `dist` folder itself.**
> Every asset path in the HTML is absolute (`/css/index.css`,
> `/assets/main-<hash>.js`), so the site must be served from the domain root.
> If files land at `public_html/dist/`, every stylesheet, font, and image will
> 404 and the page renders as unstyled text.

Zipping the `dist` contents and extracting in place is faster than uploading
file by file. Afterward, confirm `index.html` sits at `public_html/index.html`.

### Verify

- Run `npm run preview` locally first. Check that styling applies, the nav
  toggle works, and **Project Highlights** populates with cards — that section
  is the React island, and it is the piece most likely to fail silently.
- After uploading, load the live domain and open DevTools → Network. There
  should be no 404s for `/css/*`, `/javascript/*`, `/images/*`, or `/assets/*`.
- Hard-refresh (Ctrl+F5) to bypass a cached copy of the old deploy.

> **Watch out for false 200s when verifying.** `vite preview` serves
> `index.html` as a fallback for unknown paths, so a broken asset URL returns
> **200 with `content_type: text/html`** instead of a 404. Apache on Hostinger
> has no such fallback and will return a real 404. Check the *content type*,
> not just the status code:
>
> ```
> curl -s -o /dev/null -w "%{http_code} %{content_type}\n" http://localhost:4173/images/favicon.png
> ```
>
> Images referenced from React (`src/projects/project-data.js`) must use
> root-absolute paths like `/images/foo.png` — **not** `public/images/foo.png`.
> The `public/` folder's contents are copied to the site root at build time, so
> `public/` never appears in a production URL.

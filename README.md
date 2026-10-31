# Ayman Laakel — Developer Portfolio (English)

A React + Vite portfolio that **closely follows the page layout and interaction pattern** of the user-provided reference (dark navy styling, typing header, hero portrait panel, bottom scroll progress, tabbed skills, large project previews, staggered work timeline, and contact form). It uses original content and UI components, not the reference site's code or assets.

## Start

```sh
npm install
npm run dev
```

Check the production build with `npm run build`.

## Replace the placeholder portrait

The hero uses a CSS-generated monogram because no personal photo was supplied. To use your own photo, put `profile.jpg` in `public/` and replace the `.portrait-inner` content in `src/App.jsx` with `<img src="/profile.jpg" alt="Ayman Laakel" />`. Add CSS `object-fit:cover;width:100%;height:100%;`.

## Projects

The four project thumbnails are **CSS mockups**, not actual screenshots. Replace `ProjectVisual` visuals with actual screenshots when available. The only configured project URL points to the user's known CV Analyzer GitHub repository. Other project destinations intentionally omitted rather than invented.

## Resume

`public/Ayman_Laakel_CV_original.pdf` is the provided PDF and still includes an incorrect employment end date (September 2026). **Replace the PDF with your corrected version showing July 2026 before publishing.** The portfolio HTML itself uses July 2026.

## Contact

The contact form creates an email draft with `mailto:` and does not send anything from a server. To receive forms without local email software, add a backend/contact provider.


## Skill icons update
All Skills tiles now render `react-icons` / Lucide components, not letter abbreviations. Run `npm install` to install `react-icons`.


## Skills visual refresh
The Skills section has been redesigned with icon cards, responsive tabs, soft animated hover states, and a refined Tools & Platforms area. No new dependencies required.


## Project gallery (phase two)
Four offline PNG concept previews are in `public/projects/`. Replace them with real screenshots using the same filenames; these previews are NOT actual captures of the apps. Project metadata in `src/App.jsx` has `image` and `repo` fields.

Known GitHub URLs for Library Management and CV Analyzer are prefilled from previous user-provided links. Their current public availability could not be confirmed (GitHub returned 404), so make them public / verify their URLs before deploying. The repo fields for TangierGuide and AI Job Search Agent are set to `null` until a verified repository URL is supplied.


## GitHub integration (October 2026)
All seven featured repositories were verified via the connected GitHub integration and are **private**. Their links are accurate but NOT publicly accessible without permission. Do not tell recruiters that a private repo is available for public review. Project descriptions for RAG Admin Client, GeoMindAI, and Generative UI are based on their README files. Image files in `public/projects/` are conceptual previews rather than actual app screenshots. Replace them with your own screenshots before publishing.


Update 2026-10-27: TangierGuide now uses a dedicated mobile-style preview frame. The previous AI Job Search Agent card was replaced with a PDF RAG Assistant project view based on the GitHub repository requested by the user.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Bilingual (ES/EN) marketing site for Advance Medical Research Center, a clinical research site in Miami, and its owner, Dra. Ana Acosta. The whole site is one self-contained file, `index.html`: inline CSS, inline vanilla JS, no framework or dependencies. The only external resources are Google Fonts and Unsplash images.

There is no build, lint, or test tooling. To preview, open `index.html` in a browser. The site is hosted on GitHub Pages, and `CNAME` sets its custom domain, `amresearchcenter.com`; do not remove or rename it.

Always respond to the user in Spanish.

## Working with `index.html`

Line 334 holds a base64 JPEG (the doctor's portrait) and is about 78 KB long. Avoid printing it: read the file in ranges that skip it, and truncate shell output (e.g. `cut -c1-260`). `Grep` matches on that line can be huge too.

## Architecture

**Two sites in one page.** `body[data-mode]` is `centro` or `doctora`. Elements with `data-view="centro|doctora"` are shown or hidden purely by CSS, and `doctora` mode also swaps the color tokens, so theming goes through the `:root` custom properties. `setMode()` updates the attribute, page title, and brand text. Initial mode comes from the URL hash (`#doctora`), then `localStorage.modo`, unless some other hash is present, in which case it falls back to `centro`.

**Translation.** Spanish is the source text and lives in the HTML. Any element with `data-i="key"` has its `innerHTML` captured into the `ES` map at load, and `setLang()` swaps in values from the hand-written `EN` object in the script.
- Text changes must be made in both places: the HTML (ES) and `EN`.
- New translatable text needs a `data-i` key and an `EN` entry. A missing entry silently leaves the Spanish in place.
- Values are `innerHTML`, so they can include markup. Steps use `<b>Title</b>Body`, and that structure must match in both languages.
- Text without `data-i` is the same in both languages (e.g. the doctor's name, "Fax").
- `EN` contains unused keys (`inv_*`, `ia*`, `fa*`, `dr*`, `rc*`, `n_inv`) for sections not currently in the markup, with no Spanish counterpart here.

**Contact form.** There is no backend. Submitting builds a `mailto:` link to the address hardcoded in the submit handler, so it depends on the visitor's mail client. The `.role` cards preselect the form's `<select>` by `data-role` option index, so reordering the options means updating those indexes. Contact details are repeated across the help bar, both contact sections, and the form handler; update every copy.

**Motion.** Scroll reveals, count-up numbers, and hero tilt are all behind a `prefers-reduced-motion` check and `IntersectionObserver` support. The inline script in `<head>` adds `html.js`, and only `.js .rv` starts hidden, so content stays visible without JS. Elements to reveal are listed in the `sel` selector string rather than marked in the HTML.

**Accessibility panel.** Font-size and high-contrast controls (`.a11y`) are stored in `localStorage` (`fs`, `hc`). High contrast overrides the color tokens through `body.hc`.

## Content conventions

- `CAMBIAR / CHANGE` HTML comments mark placeholder or unconfirmed content awaiting the client's input. Do not invent credentials, certifications, or claims to fill them.
- This is clinical research content, so keep wording conservative. Existing copy says "may", avoids promising benefits, and describes care as study-related. Keep the educational disclaimer (`k_note`).

## Design direction

This is a medical site, so the visual direction must be serious and trustworthy before it is eye-catching. The `taste-skill:design-taste-frontend` skill tends to propose very bold designs: when using it, state this requirement up front in its brief, and reject directions that put visual impact ahead of credibility and legibility.

## CSS

There are two `max-width:720px` blocks. The second, at the end of `<style>`, overrides the first, so phone layout changes belong there.

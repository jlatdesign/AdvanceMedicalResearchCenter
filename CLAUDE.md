# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Bilingual (ES/EN) marketing site for Advance Medical Research Center, a clinical research site in Miami, and its owner, Dra. Ana Acosta. It is a static site with vanilla HTML, CSS, and JS: no framework or dependencies. The only external resource is Google Fonts.

The site is hosted on GitHub Pages, and `CNAME` sets its custom domain, `amresearchcenter.com`; do not remove or rename it.

There is no build, lint, or test tooling. Pages use root paths (`/assets/...`), so they do not work from `file://`. To preview, serve the repo root over HTTP, e.g. `npx serve .`.

Always respond to the user in Spanish.

## Architecture

**Two pages.** `index.html` is the center and `dra-ana-acosta/index.html` is the doctor's own page. Both share `assets/estilo.css` and link to each other through the `.sw.site` switch. The doctor's page sets `body.doctora`, which swaps the color tokens, so theming goes through the custom properties in `:root`. The inline script in the `<head>` of `index.html` redirects old `#doctora`, `#sobre`, `#valores`, `#trayectoria`, and `#contacto-doctora` links to the doctor's page.

**Translation (`assets/idioma.js`).** Spanish is the source text and lives in the HTML. The `EN` object is keyed by the exact Spanish text of a text node, or of an `alt`, `aria-label`, or meta description value; the page title is looked up the same way.
- Changing Spanish text means changing its `EN` key too, or the text silently stays in Spanish.
- A key must match a whole text node. Wrap a translatable phrase in a `<span>` when it shares a line with fixed text.
- A visitor's saved `lang` wins. Otherwise Spanish browsers get ES and everything else gets EN.

**Contact form (`assets/sitio.js`).** There is no backend. Submitting builds a `mailto:` link to the address hardcoded in the submit handler, so it depends on the visitor's mail client. Contact details are repeated across both pages and the form handler; update every copy.

**Accessibility controls.** Font-size and high-contrast controls (`.a11y`, in `sitio.js`) are stored in `localStorage` (`fs`, `hc`). High contrast overrides the color tokens through `body.hc`. The controls sit in the help bar instead of floating, because a fixed control covered headings and text.

**Phone layout.** The single `max-width:860px` block at the end of `estilo.css` holds the phone layout, including the `.links` menu opened by `#menu-t`.

## Content conventions

- `CAMBIAR / CHANGE` HTML comments mark placeholder or unconfirmed content awaiting the client's input. Do not invent credentials, certifications, or claims to fill them.
- This is clinical research content, so keep wording conservative: avoid promising benefits, and do not describe care as free or therapies as early access. Keep the educational disclaimer on both pages.
- Stock and archive photos are illustrative and must not be presented as the center, its staff, or its patients. `assets/dra-acosta-mejorada.jpg` is a low-resolution LinkedIn image awaiting replacement.

## Design direction

This is a medical site, so the visual direction must be serious and trustworthy before it is eye-catching. The `taste-skill:design-taste-frontend` skill tends to propose very bold designs: when using it, state this requirement up front in its brief, and reject directions that put visual impact ahead of credibility and legibility.

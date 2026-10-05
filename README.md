# Anuj Lalla's Portfolio

An academic portfolio, adapted from [Jon Barron's website](https://github.com/jonbarron/jonbarron.github.io).

## Preview

Open `index.html` directly in a browser. No installation, build step, or development server is required. The original template's Lato font loads from Google Fonts; a local fallback is available.

## Pages

- `index.html`: Bio, News, Publications, Services.
- `projects.html`: Selected Projects, Coursework and Explorations, with a CV link for additional projects.
- `beyond-research.html`: Recently played games, all-time favourites, and a short personal note about horror viewing. Text-only for now, without cover artwork or individual game descriptions.
- `stylesheet.css`: Shared academic typography and responsive layouts.
- `theme.js`: Optional dark mode, with light mode as the default and the selected theme saved locally across all pages when browser storage is available.

## Assets

- `images/anuj-lalla.jpg`: Unused, cropped, web-sized copy of the supplied convocation photograph.
- `images/anuj-convocation.jpg`: Oriented, web-sized full photograph, displayed uncropped in the intro to preserve the silver medal and degree.
- `images/deepfake-interpretability.jpg`: Input and Token-CAM panels from page 14 of the Applied ML Lab presentation.
- `images/controlnet.jpg`: Conditioning and generated-image panels from the second example in the ControlNet notebook's saved FINAL output. No training was executed.
- `data/Anuj_Lalla_CV.pdf`: Public CV export without the phone number, Microsoft email, or under-review manuscript title/authors. Only the generic ICLR 2027 review count remains in Highlights. Do not replace it with the personal `main.pdf`.

The original photograph and course repositories are unchanged. The personal CV source and PDF remain outside this directory, with the phone number and full manuscript details retained, but the Microsoft email removed. No transcript or LaTeX build intermediates are included.

When updating the CV, temporarily remove the phone and under-review Publications entry from the source, compile and verify the public PDF, then copy that PDF to `data/Anuj_Lalla_CV.pdf`. Restore the personal details and compile the personal PDF afterward, without copying it into the portfolio.

## Publishing

Deployment target: https://anuj-l22.github.io/, using the public repository `anuj-l22/anuj-l22.github.io` and the root of its `main` branch. The `.nojekyll` marker keeps this a plain static site.

Review changes to the bio, news, publication statuses, and shared project figures before pushing. The public CV is intentionally different from the personal CV; verify its privacy exclusions before publishing.

The GitHub repository name is independent of the local folder name. Publish only this portfolio directory, not its parent CV directory. The `.gitignore` excludes private CV source, transcripts, environment files, and LaTeX build intermediates.

## Attribution

Original template source: Jon Barron's public academic website, https://jonbarron.info/. The upstream README permits cloning its code for personal use. Design attribution is retained in all page footers.
# Visual research stories

`pm25.js` holds the first project's verified evidence. `pm25-narrative.js` adds a connected investigation: six acts, nine scenes, 23 dialogue beats, and four decisions with two evidence leads each. One complete path contains 27 beats. The shared reader is `../research-story.js`, styled by `../research-story.css`; `../night-guide.js` draws the homepage's pixel guide without a pipe or smoke. Everything runs as ordinary static HTML/JS on GitHub Pages; no build step or service is required.

To adapt another existing project page:

1. Keep its article/metadata inside `#research-brief`, visible by default for readers without JavaScript.
2. Add an initially hidden `#research-story` element before the brief.
3. Load the shared stylesheet **after** the existing page styles.
4. Create a data script assigning `window.RESEARCH_STORY`. Load the evidence data, narrative overlay, shared guide, then shared reader, in that order at the end of the page. Paths in scene data resolve relative to the project HTML page.
5. Verify every scene against that project's paper and supplement. Do not copy PM2.5 numbers, methods, limitations, or conclusions into another project.

Required top-level data: `id`, `title`, `category`, `publication`, `paper`, and `scenes`.

Each scene includes `id`, `chapter`, `location`, `title`, `subtitle`, `background`, optional `position`, `speaker`, `role`, `text`, `source`, `artifact`, optional `evidence`, and `choices`.

- Artifacts: `question` (body), `cohorts`/`metrics` (rows), `steps` (steps), `findings` (rows), or `forest` (two exposure-comparison modes).
- Evidence and choices: `title`, `text` (a string or an array of paragraphs), `source`, and optionally `image`, `alt`, `caption`. Choices additionally have a button `label`.
- Forest rows require `label`, `hr`, `low`, `high`. The current forest control is specific to the PM2.5 per-10-unit/quartile comparison; adapt its labels and scale before using a different study.
- Scene-level `choices` open optional source notes. Dialogue-level `choices` instead select an investigation lead, insert the guide's response, and reveal a corresponding evidence display. They change the reading path, never the scientific outcome.
- The narrative overlay adds `acts` and, for each scene, `act`, `question`, `conclusion`, `exitLabel`, and `beats`. A beat has `id`, `speaker` (`GUIDE` or `YOU`), `text`, and `exhibit`; a decision beat adds `choices` containing `id`, `label`, `response`, `exhibit`, and `artifact`.
- The casebook records a scene's conclusion after all its dialogue and the chosen response have been read. Chapter jumps remain available. Going back permits choosing a different lead without stacking duplicate responses.
- The reader supports evidence reveal/hide, previous/next dialogue, keyboard navigation, reduced motion, native modal focus handling, and returning to the original brief. Guide animation pauses while the page is hidden.

## PM2.5 sources and interpretation

Burrows K, Luo J, Cai Y, Aschebrook-Kilfoy B. *Long-term PM2.5 exposure and mental health disparities: A prospective analysis of the All of Us Research Program*. Environmental Research 285 (2025), 122691. [Published article and supplementary materials](https://doi.org/10.1016/j.envres.2025.122691).

| Chapter | Evidence anchor |
|---|---|
| The street | Abstract; Introduction |
| The people | Methods §§2.1–2.3; Results §3.1; Table S1 |
| The exposure | Methods §2.2; Tables S2–S3 |
| The results | Abstract; Results §3.1; Tables S4–S5 |
| The pattern | Figure 1; Table S4 |
| The differences | Results §3.2; Figures 2–3; Table S10; limitations |
| The checks | Tables S2–S3 and S6–S8 |
| The gaps | Discussion pp. 5–6; Figure S2 |
| The way back | Discussion; CRediT statement |

The source files were supplied locally: `1-s2.0-S0013935125019437-main.pdf` and `1-s2.0-S0013935125019437-mmc1.docx`. Original figure panels are used in evidence notes. Generated street, archive, city-map, and observatory settings illustrate the investigation; they do not depict measured locations or participants. Numerical evidence is rendered separately as readable HTML and SVG. The original site city cover remains an image-load fallback.

The supplied publication contains internal discrepancies in the Figure 1 sample-size caption, race-subgroup outcome labels, and alternative-exposure estimates. The reader uses cohort counts repeated in the Results and Tables S1/S4, presents consistent overall estimates, and explains the relevant conflicts in the evidence notebook. It omits disputed precise subgroup estimates and prevented-case claims. A detailed author-facing audit is retained locally at `.claude/pm25-story/evidence-packet.md` (excluded from Git).

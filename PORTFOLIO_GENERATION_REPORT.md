# Portfolio generation report

Prepared 2026-10-08 for Neural Networks and Deep Learning (2026). Four projects; six Python notebooks; eight assignment/report PDFs. See [audit inventory](PORTFOLIO_AUDIT.md) for evidence, metadata uncertainty, and requirement/implementation comparisons.

## Files created (27)

- [.gitignore](.gitignore)
- [.gitignore.portfolio-suggestions](.gitignore.portfolio-suggestions)
- [1/README.md](1/README.md)
- [2/README.md](2/README.md)
- [3/README.md](3/README.md)
- [4/README.md](4/README.md)
- [AGENTS.md](AGENTS.md)
- [CITATION.template.cff](CITATION.template.cff)
- [CONTRIBUTING.md](CONTRIBUTING.md)
- [LICENSE-NOTICE.md](LICENSE-NOTICE.md)
- [PAGES_SETUP.md](PAGES_SETUP.md)
- [PORTFOLIO_AUDIT.md](PORTFOLIO_AUDIT.md)
- [PORTFOLIO_GENERATION_REPORT.md](PORTFOLIO_GENERATION_REPORT.md)
- [PUBLICATION_REVIEW.md](PUBLICATION_REVIEW.md)
- [README.md](README.md)
- [docs/.nojekyll](docs/.nojekyll)
- [docs/404.html](docs/404.html)
- [docs/assets/css/style.css](docs/assets/css/style.css)
- [docs/assets/images/autoencoder_loss_curve.png](docs/assets/images/autoencoder_loss_curve.png)
- [docs/assets/images/test_similarity_matrix.png](docs/assets/images/test_similarity_matrix.png)
- [docs/assets/js/main.js](docs/assets/js/main.js)
- [docs/favicon.svg](docs/favicon.svg)
- [docs/index.html](docs/index.html)
- [docs/projects/generative-vision.html](docs/projects/generative-vision.html)
- [docs/projects/logic-and-memory.html](docs/projects/logic-and-memory.html)
- [docs/projects/molecular-graph-sequences.html](docs/projects/molecular-graph-sequences.html)
- [docs/projects/shakespeare-memory-duel.html](docs/projects/shakespeare-memory-duel.html)

No pre-existing README was present, so no README.generated.md fallback was needed. No existing support file was overwritten. Existing .gitattributes was preserved. Two student-generated plots were copied unchanged into docs for independent static serving; no original image was replaced.

## Existing files preserved

SHA-256 comparison passed for all 61 pre-existing non-Git files, including untracked coursework. No file changed, disappeared, or was moved. Git metadata was excluded from content hashing. Baseline inventory/hashes and extracted text were held outside the repository in a task-specific temporary directory; extracted PDF/notebook text is disposable and removed after inspection.

## Validation performed

- Case-exact local path checks passed for 134 Markdown/HTML/source-repository targets, including encoded spaces and hash characters in PDF filenames. GitHub blob/tree URLs were mapped to local inventory; remote HTTP availability was not assumed.
- All six HTML pages have unique IDs, nonempty titles, mobile viewports, semantic navigation/main/footer, balanced parsed markup, valid local fragments, and descriptive image alternatives. All four detected projects are represented.
- 11 static resources returned HTTP 200 from an ephemeral local server serving docs only, including nested pages and preview images. All site assets are local, and regular site links work under a project URL prefix. The 404 return link uses the expected absolute site URL to handle unknown nested paths.
- JavaScript syntax passed node --check. Theme behavior was separately checked with mocked DOM and browser color preferences (see final verification). CSS uses a mobile breakpoint, visible focus styles, and reduced-motion rules. Core text/accent/background contrast ratios are [13.27, 6.05, 6.11, 13.74, 8.62, 9.18], all above 4.5:1.
- Documentation measurements were checked against report text, notebook text outputs, Project 2 JSON, and Project 4 CSVs. No experimental output was regenerated.
- No browser visual rendering or screen-reader session was available; mobile responsiveness/accessibility were reviewed through markup and CSS, not certified through browser interaction. External repository/PDF links require separately committed reviewed coursework.

## Manual actions required

- [ ] Resolve access credentials in all four assignment PDFs before public publication; originals remain unchanged here.
- [ ] Review student identifiers in all four reports and local paths in notebook outputs. Confirm author attribution is acceptable.
- [ ] Confirm university/course solution-publication policy and instructor-description copyright.
- [ ] Review Tiny Shakespeare, Lipophilicity, Fashion-MNIST, and scene-image redistribution rights.
- [ ] Select a scoped license after ownership review; complete citation release fields if desired.
- [ ] Add verified university, department, instructor, and semester metadata; optionally replace the unused LinkedIn placeholder.
- [ ] Verify configured GitHub account/repository (already inferred from origin) and main branch links; no account/name placeholder replacement is needed unless these change.
- [ ] Review and commit generated files. Separately commit only coursework artifacts approved for sharing.
- [ ] Push the intended branch; enable Pages from /docs; verify the published URL.

## Risks and limitations

Read [publication review](PUBLICATION_REVIEW.md) before sharing. Original PDFs contain access credentials and identifiers; dataset and institutional licensing remain unclear. Largest artifacts are a 17.66 MiB processed tensor and 13.59 MiB checkpoint; none exceeds 100 MiB. Project 3 input datasets and Project 4 joint-model weights are missing. Execution instructions are inferred and untested; environments are not pinned. Project 2's epoch-label discrepancy and Project 3's differing collapse descriptions are explicitly recorded.

## Publication next steps

[PAGES_SETUP.md](PAGES_SETUP.md) contains the exact generated-file staging command and review/commit/push sequence. In GitHub: Settings → Pages → Build and deployment → Source: Deploy from a branch → select the publication branch (main) and /docs → Save. Expected URL: https://Mana-Peiravian.github.io/neural-networks-and-deep-learning-projects/ (not verified live).

No coursework execution, training, dataset download, commit, push, or GitHub settings change was performed by this agent. During preparation an external Git operation created commit `71e414d` (Configure github.io files), tracking coursework and most generated files. The two audit reports remained untracked at final inspection. This commit includes the flagged original PDFs; review it before public push. Remote publication status was not checked. Do not rewrite history or remove files automatically.

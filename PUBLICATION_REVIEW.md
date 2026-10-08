# Publication review

## Findings requiring action

- All four instructor assignment PDFs contain a course-access password and enrollment portal URL in their submission notes. The password is not reproduced here. Resolve access/security and institutional permission before public release.
- All four submitted reports contain a student identifier. The author name is used for attribution; the identifier is omitted from generated files. Review names, branding, and additional personal information before release.
- Notebook outputs in Projects 2–4 contain local absolute paths or hosted-runtime paths. Review outputs for unintended personal filesystem details. Source and outputs were preserved.
- Project 3's original scene dataset is absent and has unclear provenance. Colorization/AAE result grids embed source scenes, including people. No scene grids were copied into docs; rights still require review in the repository and reports.
- Project 2 redistributes Tiny Shakespeare without a local provenance/license notice. Project 4 includes a Lipophilicity CSV and derived molecular records. Public download availability does not establish redistribution permission.
- Complete solutions and instructor-owned assignment descriptions may be subject to course publication policy. University, instructor, and semester were not established. Confirm permission with the relevant rights holders.

## Scope and limits

Eight PDFs were examined as extracted text; all six notebooks and saved result formats were inspected statically. Heuristic credential/identifier/path checks found the categories above; applied token-like API credential patterns found no match. This is not an exhaustive security or legal review. PDF imagery and binary weights were not exhaustively inspected; checkpoints were not deserialized.

## Large artifacts

| Artifact | Size |
| --- | --- |
| Project 4 processed data tensor | 18,518,089 bytes (~17.66 MiB) |
| Project 3 colorization checkpoint | 14,252,363 bytes (~13.59 MiB) |
| Project 4 notebook | 2,327,806 bytes (~2.22 MiB) |

No inventoried coursework file exceeds 100 MiB. Consider a separate artifact host for growing binary outputs. No artifact was removed.

## Recommended publication approach

Keep coursework private until credentials, personal data, licensing, and course-policy issues are resolved. The static website contains summaries and two student-generated plots, without PDF, dataset, or weight copies. Its GitHub links require a reviewed repository and correct branch. A separately reviewed site-only release can avoid publishing the entire course folder.

[Ignore suggestions](.gitignore.portfolio-suggestions) are commented suggestions only. The active .gitignore excludes routine local artifacts, not coursework or required data. Ignore rules cannot sanitize tracked files or Git history. Initially all four coursework folders were untracked; avoid blanket staging before review.

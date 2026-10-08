# GitHub Pages setup

The site is prepared locally. No commit, push, or hosting setting was changed. Resolve [publication findings](PUBLICATION_REVIEW.md) first; original assignment PDFs contain credentials and reports contain identifiers.

1. Verify origin is the intended [repository](https://github.com/Mana-Peiravian/neural-networks-and-deep-learning-projects).
2. Review `docs/assets/js/main.js`. Account/repository come from origin; LinkedIn is an unused placeholder. HTML source links assume `main`: update `/blob/main/` and `/tree/main/` references if another branch is used. The 404 home URL must change if the repository is renamed.
3. Commit reviewed documentation and only coursework files cleared for release, then push the publication branch.
4. Open **Settings → Pages** in GitHub. Under **Build and deployment**, choose **Source → Deploy from a branch**. Select the branch containing the website (for example `main`), select **/docs**, then **Save**.
5. Check deployment status and visit the [expected portfolio URL](https://Mana-Peiravian.github.io/neural-networks-and-deep-learning-projects/). Test project pages, images, source links, keyboard navigation, theme switching, and mobile layout.

Source: [GitHub's official publishing-source instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). Private repository Pages availability depends on the account plan; the site itself may be public, so review it too.

## Local preview

From the repository root:

```sh
python -m http.server 8000 --directory docs --bind 127.0.0.1
```

Open http://127.0.0.1:8000/; stop with Ctrl+C. This serves website files only and needs no installation or build. Original material links point to GitHub because Pages does not serve coursework outside docs.

## Recommended Git sequence

```sh
git status --short
git diff --stat
git diff
# Untracked new files do not appear in git diff before staging.
git add README.md 1/README.md 2/README.md 3/README.md 4/README.md docs/ .gitignore .gitignore.portfolio-suggestions AGENTS.md CONTRIBUTING.md CITATION.template.cff LICENSE-NOTICE.md PAGES_SETUP.md PUBLICATION_REVIEW.md PORTFOLIO_GENERATION_REPORT.md PORTFOLIO_AUDIT.md
git diff --cached --stat
git diff --cached
git commit -m "Add course portfolio documentation and GitHub Pages site"
git push -u origin HEAD
```

Only generated files are staged by this command. Coursework begins untracked, so original-material links will be unavailable until reviewed files are committed separately. Do not use a blanket add command on unresolved sensitive materials.

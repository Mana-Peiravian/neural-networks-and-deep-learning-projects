"use strict";
// Central configuration; account and repository are taken from origin.
// Verify the branch in generated HTML links before publication.
const portfolioConfig = Object.freeze({
  githubUsername: "Mana-Peiravian",
  repositoryName: "neural-networks-and-deep-learning-projects",
  repositoryUrl: "https://github.com/Mana-Peiravian/neural-networks-and-deep-learning-projects",
  repositoryBranch: "main",
  linkedinUrl: "YOUR_LINKEDIN_URL"
});
document.querySelectorAll("a[data-repository]").forEach(link => {
  link.href = portfolioConfig.repositoryUrl;
});
// In-memory preference: no cookies, trackers, or browser storage.
const themeButton = document.getElementById("theme-toggle");
if (themeButton) {
  let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const update = () => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    themeButton.setAttribute("aria-pressed", String(dark));
    themeButton.textContent = dark ? "Light theme" : "Dark theme";
    themeButton.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  };
  themeButton.hidden = false;
  update();
  themeButton.addEventListener("click", () => { dark = !dark; update(); });
}

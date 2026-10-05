(() => {
  const storageKey = "anuj-portfolio-theme";
  const root = document.documentElement;
  let theme = "light";

  try {
    theme = localStorage.getItem(storageKey) === "dark" ? "dark" : "light";
  } catch {}

  root.dataset.theme = theme;

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("theme-toggle");
    if (!toggle) return;

    toggle.checked = root.dataset.theme === "dark";
    toggle.closest(".theme-toggle").hidden = false;

    toggle.addEventListener("change", () => {
      const selectedTheme = toggle.checked ? "dark" : "light";
      root.dataset.theme = selectedTheme;

      try {
        localStorage.setItem(storageKey, selectedTheme);
      } catch {}
    });
  });
})();
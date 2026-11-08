// Runs before styles: shared cookie wins over an older origin-only preference.
(function () {
  var theme = "dark";
  var saved;
  try {
    var cookie = document.cookie
      .split(";")
      .map(function (part) {
        return part.trim();
      })
      .find(function (part) {
        return part.indexOf("vv_theme=") === 0;
      });
    if (cookie) saved = cookie.slice(9);
  } catch {
    /* Storage fallback below. */
  }
  if (saved !== "dark" && saved !== "light") {
    try {
      saved = window.localStorage.getItem("villar-theme");
    } catch {
      /* Default dark. */
    }
  }
  if (saved === "dark" || saved === "light") theme = saved;
  document.documentElement.setAttribute("data-theme", theme);
})();

const { i18n } = require("./next-i18next.config");

const config = {
  // Uncomment will call middleware.
  pageExtensions: ["api.ts", "page.tsx"],
  i18n,
}

module.exports = config;

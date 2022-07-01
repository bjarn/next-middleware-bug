const { i18n } = require("./next-i18next.config");

const config = {
  // Uncomment will call middleware.
  // When renaming the middleware.ts file to `middleware.api.ts`, it will work too.
  pageExtensions: ["api.ts", "page.tsx"],
  i18n,
}

module.exports = config;

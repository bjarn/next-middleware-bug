Middleware bug reproduction repro.

Breaks when adding `pageExtensions: ["api.ts", "page.tsx"],` to the next.config.js. Removing fixes the issue.

Renaming the `middleware.ts` file to `middleware.api.ts` in this case will make it work too. However, I don't believe the middleware is an api "page" as it lives outside the pages folder.

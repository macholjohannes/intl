const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/eacastel/webdev/AAA/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/eacastel/webdev/AAA/src/pages/404.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/eacastel/webdev/AAA/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/eacastel/webdev/AAA/src/pages/index.js"))),
  "component---src-pages-privacy-js": hot(preferDefault(require("/home/eacastel/webdev/AAA/src/pages/privacy.js"))),
  "component---src-pages-terms-js": hot(preferDefault(require("/home/eacastel/webdev/AAA/src/pages/terms.js")))
}


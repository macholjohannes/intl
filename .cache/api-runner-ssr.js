var plugins = [{
      plugin: require('/home/eacastel/webdev/AAA/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/eacastel/webdev/AAA/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Machol & Johannes, LLC Attorneys At Law","short_name":"Machol & Johannes","start_url":"/","background_color":"#024fa2","theme_color":"#024fa2","display":"minimal-ui","icon":"src/images/machol-johannes-icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"5d33862506fefdae006112a081f5fe60"},
    },{
      plugin: require('/home/eacastel/webdev/AAA/node_modules/gatsby-plugin-intl/gatsby-ssr'),
      options: {"plugins":[],"path":"/home/eacastel/webdev/AAA/src/intl","languages":["en","es"],"defaultLanguage":"en","redirect":true,"redirectComponent":"/home/eacastel/webdev/AAA/src/components/redirect.js"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}

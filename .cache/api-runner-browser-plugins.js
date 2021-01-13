module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Machol & Johannes, LLC Attorneys At Law","short_name":"Machol & Johannes","start_url":"/","background_color":"#024fa2","theme_color":"#024fa2","display":"minimal-ui","icon":"src/images/machol-johannes-icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"5d33862506fefdae006112a081f5fe60"},
    },{
      plugin: require('../node_modules/gatsby-plugin-intl/gatsby-browser.js'),
      options: {"plugins":[],"path":"/home/eacastel/webdev/AAA/src/intl","languages":["en","es"],"defaultLanguage":"en","redirect":true,"redirectComponent":"/home/eacastel/webdev/AAA/src/components/redirect.js"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]

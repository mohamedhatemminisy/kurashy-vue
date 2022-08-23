  module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/" : "/ar",

    pluginOptions: {
      i18n: {
        locale: 'en',
        fallbackLocale: 'en',
        localeDir: 'locales',
        enableInSFC: false,
        enableLegacy: true,
        runtimeOnly: false,
        compositionOnly: true,
        fullInstall: true
      },
    },
  };

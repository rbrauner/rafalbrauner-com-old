module.exports = {
    chainWebpack: (config) => {
        config.plugin("html").tap((args) => {
            args[0].title = "Rafał Brauner - Backend Developer";
            return args;
        });
    },

    pwa: {
        name: "Rafał Brauner - Backend Developer",
        themeColor: "#bd5d38",
        manifestOptions: {
            background_color: "#ffffff",
            icons: [
                {
                    src: "./img/icons/android-chrome-192x192.png",
                    sizes: "192x192",
                    type: "image/png",
                },
                {
                    src: "./img/icons/android-chrome-512x512.png",
                    sizes: "512x512",
                    type: "image/png",
                },
                {
                    src: "./img/icons/android-chrome-maskable-192x192.png",
                    sizes: "192x192",
                    type: "image/png",
                    purpose: "maskable",
                },
                {
                    src: "./img/icons/android-chrome-maskable-512x512.png",
                    sizes: "512x512",
                    type: "image/png",
                    purpose: "maskable",
                },
                {
                    src: "./img/icons/apple-touch-icon-60x60.png",
                    sizes: "60x60",
                    type: "image/png",
                },
                {
                    src: "./img/icons/apple-touch-icon-76x76.png",
                    sizes: "76x76",
                    type: "image/png",
                },
                {
                    src: "./img/icons/apple-touch-icon-120x120.png",
                    sizes: "120x120",
                    type: "image/png",
                },
                {
                    src: "./img/icons/apple-touch-icon-180x180.png",
                    sizes: "180x180",
                    type: "image/png",
                },
                {
                    src: "./img/icons/apple-touch-icon.png",
                    sizes: "180x180",
                    type: "image/png",
                },
                {
                    src: "./img/icons/mstile-150x150.png",
                    sizes: "150x150",
                    type: "image/png",
                },
            ],
        },
    },

    pluginOptions: {
        i18n: {
            locale: "en",
            fallbackLocale: "en",
            localeDir: "locales",
            enableLegacy: false,
            runtimeOnly: false,
            compositionOnly: false,
            fullInstall: true,
        },
    },
};

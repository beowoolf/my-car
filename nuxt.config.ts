// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css",
    "~/node_modules/bootstrap-icons/font/bootstrap-icons.css",
  ],
  modules: ["@nuxtjs/color-mode", "@nuxt/image"],
  app: {
    head: {
      htmlAttrs: {
        lang: "pl-PL",
        class: "h-100",
      },
      bodyAttrs: {
        class: "d-flex flex-column h-100",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      script: [
        {
          defer: true,
          src: "//cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
        },
      ],
    },
  },
  nitro: {
    externals: {
      traceOptions: {
        base: process.cwd(),
      },
    },
  },
});

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            prefixClass: "qk-main",
          },
          prefixClass2: "qk-main2",
        },
      },
    },
  },
});

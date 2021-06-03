module.exports = {
  devServer: {
    proxy: "http://www.donates.algalya.com/",
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/style/style.scss";`,
      },
    },
  },
};

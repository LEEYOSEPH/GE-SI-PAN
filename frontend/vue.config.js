module.exports = {
  chainWebpack: config => {
        config.module.rules.delete('eslint');
    },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000/api",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  outputDir: "../backend/public",
};

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http:/54.88.114.24:4000",
      changeOrigin: true,
    })
  );
};

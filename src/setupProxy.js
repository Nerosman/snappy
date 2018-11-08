const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy("/orderList", { target: "http://localhost:6000/", "secure": false, "changeOrigin": true}));
};
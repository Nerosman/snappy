const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy("/orderList", { target: "http://[::1]:5000/", "secure": false, "changeOrigin": true}));
    app.use(proxy("/api/address", {target: "http://www.yaddress.net/", "changeOrigin": true}))
};
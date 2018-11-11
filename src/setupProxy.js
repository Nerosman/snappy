const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy("/orderList", { target: "http://[::1]:5000/"}));
};
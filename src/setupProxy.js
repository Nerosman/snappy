const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy("/orderList", { target: "https://evening-mountain-62254.herokuapp.com", "secure": false, "changeOrigin": true}));
};
module.exports = function(app) {
    const orderList = require('../controllers/orderListController');

    // todoList Routes
    app.route('/orderList')
        .get(orderList.all_order_list)
        .post(orderList.create_order);
};

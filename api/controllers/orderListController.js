const mongoose = require('mongoose');
const OrderList = mongoose.model('OrderList');

exports.all_order_list = function(req, res) {
    OrderList.find({}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.create_order = function(req, res) {
    const new_order = new OrderList(req.body);
    new_order.save(function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};
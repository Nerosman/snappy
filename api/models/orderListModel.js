const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const OrderListSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter your first name'
    },
    secondName: {
        type: String,
        required: 'Enter your second name'
    },
    address1: {
        type: String,
        required: 'Enter your address'
    },
    address2: {
        type: String,
        required: 'Enter city, state, zip'
    },
    email: {
        type: String,
        required: 'Enter email'
    },
    phone: {
        type: Number,
        required: 'Enter your phone number'
    },
    specialNotes: {
        type: String
    }
});

module.exports = mongoose.model('OrderList', OrderListSchema);
const express = require('express');
const app = express();
const port = process.env.PORT || 6000;
const mongoose = require('mongoose');
const Task = require('./api/models/orderListModel');
const bodyParser = require('body-parser');
const routes = require('./api/routes/orderListRoutes');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://root:qwerty201@ds253783.mlab.com:53783/snappy-orders', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

/*
Gerard Bringard
Homework2
This project in an API that deals with
products and users. It connects to a
MongoDB cluster and then has the ability
to handle GET, POST, PUT, PATCH, and DELETE
requests for products and users.
 */
require('dotenv').config();
const Express = require('express');
const BodyParser = require('body-parser');
const Mongoose = require('mongoose');
const UserRoutes = require('./routes/user.routes');
const ProductRoutes = require('./routes/product.routes');

const app = Express();
app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());
app.use('/users', UserRoutes);
app.use('/products', ProductRoutes);

(async () => {
  await Mongoose.connect(process.env.CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  app.listen(8000);
})();

const _ = require('underscore');
const express = require('express');
const bodyParser = require('body-parser');

const adminRoute=require('./routes/admin');
const userRoute=require('./routes/user');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/admin',adminRoute);
app.use(userRoute);

app.listen(3000, function () {
   console.log("Listening port...");
});

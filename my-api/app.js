const express = require('express');
const router = require("./src/routes/api");
//create object for express
const app = new express();
const bodyParser = require('body-parser');

//Security Middleware Import
 const rateLimit = require('express-rate-limit');;
 const helmet = require('helmet');
 const mongoSanitize = require('express-mongo-sanitize');
 const xss = require('xss-clean');
 const hpp = require('hpp');
 const cors = require('cors');
 const mongoose = require('mongoose');


//Security Middleware Implement
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())
app.use(bodyParser.json());


//Request Rate Limiting
const limiter = rateLimit({
 windowMs: 15*60*1000, //15 minutes
 max: 100  //limit each IP to 100 requests per windowMs
});
app.use(limiter)


//MongoDB Database Connection
let URI ="mongodb://127.0.0.1:27017/Schools"
let OPTION = {user:'', pass:''}
mongoose.connect(URI,OPTION, (error) => {
 console.log("connection success");
 console.log(error);
})


//Base URL
app.use("/api/v1", router);


//udefined route
app.use('*',(req, res) => {
    res.status(404).json({status: "fail", data: "not found"});
});






module.exports = app;
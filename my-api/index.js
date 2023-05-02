const app = require("./app");
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});


app.listen(process.env.RUNNING_PORT,function (){
    console.log("THE PORT NUMBER IS : "+process.env.RUNNING_PORT +" WHICH FROM ENV FILE");
});
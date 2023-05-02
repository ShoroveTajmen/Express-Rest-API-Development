const jwt = require("jsonwebtoken");

module.exports = (req,res,next) => {
    let Token = req.headers['token-key']
    jwt.verify(Token, "SecretKey1234", function (err, decode){
        if(err){
            res.status(401).json({status:"Unauthorized",data:err});
        }
        else {
            //Get username from decoded token and add with request header
            let username = decode['data']['UserName']
            req.headers.username = username

            next();
        }
    })
}
const express = require('express');
const HelloController = require("../controllers/HelloController");
const StudentsController = require("../controllers/StudentsController");
const JWTPractice = require("../controllers/JWTPractice");
const TokenIssueController = require("../controllers/TokenIssueController");
const TokenVerifyMiddleware = require("../middleware/TokenVerifyMiddleware");

const router = express.Router();


//this is my first get routing
router.get("/hello-get",HelloController.HelloGet)
router.post("/hello-post",HelloController.HelloPost)

//Apply JWT Auth
router.get("/TokenIssue",TokenIssueController.TokenIssue);
router.post("/InsertStudent",TokenVerifyMiddleware,StudentsController.InsertStudent);
router.get("/ReadStudent",TokenVerifyMiddleware,StudentsController.ReadStudent);
router.post("/UpdateStudent/:id",TokenVerifyMiddleware,StudentsController.UpdateStudent);
router.get("/DeleteStudent/:id",TokenVerifyMiddleware,StudentsController.DeleteStudent);


//Practice JWT Encode Decode
router.get("/CreateToken", JWTPractice.CreateToken);
router.get("/DecodeToken", JWTPractice.DecodeToken);

module.exports = router;
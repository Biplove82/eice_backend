const { registration } = require("../Controller/userController");

var router = require("express").Router();


router.post("/user",registration)

module.exports=router;
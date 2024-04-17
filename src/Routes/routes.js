const { registration, getData } = require("../Controller/userController");

var router = require("express").Router();


router.post("/user",registration)
router.get ("/getdata",getData)

module.exports=router;
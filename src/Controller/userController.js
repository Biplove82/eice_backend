const userModels = require("../Modells/userModells");
const registration = async function (req, res) {
  try {
    const { firstName, lastName, email, message } = req.body;


    const existingUser = await userModels.findOne({ email:email });

    if (existingUser) {
      return res.status(401).json({ message: "Username already exists" });
    }
    const registerData = new userModels({
      firstName,
      lastName,
      email,
      message,
    });

    await registerData.save();


    res
      .status(200)
      .json({ id: registerData._id, msg: "User Registered Succesfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" + error });
  }


};
  
const getData = async function(req,res){
  let data= await userModels.find();
  res.status(200).json({data})

}

module.exports = { registration,getData };
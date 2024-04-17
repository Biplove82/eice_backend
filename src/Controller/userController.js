const userModells = require("../Modells/userModells");

const registration = async function (req, res) {
  try {
  const { firstName, lastName, email, message } = req.body;
  const registerData = new userModells({
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

const getData = async function (req, res) {
  let data = await userModells.find();
  res.status(200).json({ data });
};

module.exports = { registration, getData };

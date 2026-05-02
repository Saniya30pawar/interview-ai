const userModel = require("../models/user.model");

async function registerUserController(req, res) {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({
      message: "Please provide username , email , password ",
    });
  }

  const isUserExist = await userModel.findOne({ email });

  console.log(isUserExist);

  if (isUserExist) {
    /* isUserAlreadyExists.username == username */
    return res.status(400).json({
      message: "User already exists with this username or email address",
    });
  } else {
    await userModel.insertOne({ email, password, username });
  }

  return res.json({ success: true });
}

module.exports = {
  registerUserController,
};

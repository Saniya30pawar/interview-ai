const express = require("express");
const authController = require("../controllers/auth.controller");

const authRouter = express.Router();

/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 */
authRouter.post("/register", authController.registerUserController);
authRouter.post("/login", async (req, res) => {
  return res.json({ success: true });
});

module.exports = authRouter;

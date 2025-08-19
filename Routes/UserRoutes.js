const express = require("express");
const router = express.Router();
const userController = require("../Controller/UserController");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.put("/me", userController.protectRoutes, userController.updateMe);
router.get("/me", userController.protectRoutes, userController.getMe);
console.log("User routes loaded")
module.exports = router;

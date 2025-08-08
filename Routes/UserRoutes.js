const express = require("express");
const router = express.Router();
const userController = require("../Controller/UserController");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/", userController.protectRoutes, userController.getAllUsers);
router.put("/:id", userController.protectRoutes, userController.updateUser);
router.delete("/:id", userController.protectRoutes, userController.deleteUser);

module.exports = router;

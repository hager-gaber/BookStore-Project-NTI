const express = require("express");
const router = express.Router();
const adminController = require("../Controller/AdminController");

router.post("/", adminController.createAdmin);
router.get("/", adminController.getAllAdmins);
router.delete("/:id", adminController.deleteAdmin);

module.exports = router;

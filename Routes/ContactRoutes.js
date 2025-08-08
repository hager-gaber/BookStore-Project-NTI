const express = require("express");
const router = express.Router();
const contactController = require("../Controller/ContactController");

router.post("/", contactController.addContact);
router.get("/", contactController.getAllContacts);
router.delete("/:id", contactController.deleteContact);

module.exports = router;

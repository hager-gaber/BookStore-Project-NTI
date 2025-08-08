const express = require("express");
const router = express.Router();
const authorController = require("../Controller/AuthorController");

router.post("/", authorController.addAuthor);
router.get("/", authorController.getAllAuthors);
router.get("/:id", authorController.getAuthorById);
router.put("/:id", authorController.updateAuthor);
router.delete("/:id", authorController.deleteAuthor);

module.exports = router;

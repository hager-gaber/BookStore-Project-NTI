const express = require("express");
const router = express.Router();
const bookController = require("../Controller/BookController");

router.post("/", bookController.addBook);
router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getBookById);
router.put("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;

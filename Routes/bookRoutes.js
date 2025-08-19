const express = require("express");
const router = express.Router();
const bookController = require("../Controller/BookController");

router.get("/", bookController.getAllBooks);
router.get("/name/:name", bookController.getBookByName);




module.exports = router;

const Book = require("../models/Book");

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getBookByName = async (req, res) => {
  try {
    const { name } = req.params;
    const book = await Book.findOne({title : { $regex: new RegExp(name, "i") }});

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    return res.status(200).json(book);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


const Book = require("../models/Book");

exports.addBook = async (req, res) => {
  try {
    const { title, description, author, category, publishedYear,price } = req.body;

    const newBook = new Book({
      title,
      description,
      author,
      category,
      publishedYear,
      price
    });

    await newBook.save();
    return res.status(201).json({ message: "Book added successfully", book: newBook });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().populate("author").populate("category");
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id).populate("author").populate("category");

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    return res.status(200).json(book);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedBook = await Book.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    return res.status(200).json({ message: "Book updated", book: updatedBook });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    return res.status(200).json({ message: "Book deleted", book: deletedBook });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const User = require("../models/User")
const Admin = require("../models/Admin")
const Book = require("../models/Book")



//get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();  
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


//delete user 
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User deleted successfully", user: deletedUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
//get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//update books
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//add book
exports.addBook = async (req, res) => {
  try {
    const { title, author, category, description, price, publishedYear } = req.body;
    const newBook = new Book({ title, author, category, description, price, publishedYear });
    await newBook.save();
    return res.status(201).json({ message: "Book added successfully", book: newBook });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

//delete book
exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json({ message: "Book deleted successfully", book: deletedBook });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}


//crete admin
exports.createAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const newAdmin = new Admin({ email, password });
    await newAdmin.save();

    return res.status(201).json({ message: "Admin created successfully", admin: newAdmin });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//get admin
exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    return res.status(200).json(admins);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


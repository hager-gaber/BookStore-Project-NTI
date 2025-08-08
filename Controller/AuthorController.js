const Author = require("../models/Author");

exports.addAuthor = async (req, res) => {
  try {
    const { name, bio, birthDate } = req.body;

    const newAuthor = new Author({
      name,
      bio,
      birthDate,
    });

    await newAuthor.save();
    return res.status(201).json({ message: "Author added successfully", author: newAuthor });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    return res.status(200).json(authors);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


exports.getAuthorById = async (req, res) => {
  try {
    const { id } = req.params;
    const author = await Author.findById(id);

    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }

    return res.status(200).json(author);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Update author
exports.updateAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedAuthor = await Author.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedAuthor) {
      return res.status(404).json({ message: "Author not found" });
    }

    return res.status(200).json({ message: "Author updated", author: updatedAuthor });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Delete author
exports.deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedAuthor = await Author.findByIdAndDelete(id);

    if (!deletedAuthor) {
      return res.status(404).json({ message: "Author not found" });
    }

    return res.status(200).json({ message: "Author deleted", author: deletedAuthor });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

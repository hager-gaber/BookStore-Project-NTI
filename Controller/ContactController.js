const Contact = require("../models/Contact");

exports.addContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    return res.status(201).json({ message: "Message sent successfully", contact: newContact });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    return res.status(200).json(contacts);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Delete a contact message
exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.status(404).json({ message: "Contact message not found" });
    }

    return res.status(200).json({ message: "Contact deleted", contact: deletedContact });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const Admin = require("../models/Admin");


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

exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    return res.status(200).json(admins);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedAdmin = await Admin.findByIdAndDelete(id);
    if (!deletedAdmin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    return res.status(200).json({ message: "Admin deleted", admin: deletedAdmin });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

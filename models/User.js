const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type : String,
    required : true ,
    minlength:[8,"Minimum length 8"]},
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
})

module.exports = mongoose.model("User", userSchema);

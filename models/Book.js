const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  author: {type: String},  

  category: {
    type: String,
    required: true,
  },

  description: {type : String},

  price: {
    type: Number,
    required: true,
  },
  
  publishedYear: {
  type: Number,
  required: true,
}

});

module.exports = mongoose.model("Book", bookSchema);

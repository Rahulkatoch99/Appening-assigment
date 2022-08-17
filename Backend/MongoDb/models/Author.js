const mongoose = require("mongoose");

const Author = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "books",
  },

  name: {
    type: String,
  },
  age: {
    type: String,
  },
  dob: {
    type: String,
  },
  Books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "books",
    },
  ],
});

const Books = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "author",
  },
  name: {
    type: String,
  },
  publish: {
    type: String,
  },
  price: {
    type: String,
  },
});

const author = new mongoose.model("Author", Author);

const books = new mongoose.model("Books", Books);

module.exports = { author, books };

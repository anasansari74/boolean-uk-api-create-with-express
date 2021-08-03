const Book = require("./model");

const { createOneBook } = Book();

function findAll(req, res) {
  res.json({ books: "All your books" });
}

function createOne(req, res) {
  const newBook = req.body;

  createOneBook(newBook, createdBook => {
    res.json({ book: createdBook });
  });
}

module.exports = { findAll, createOne };

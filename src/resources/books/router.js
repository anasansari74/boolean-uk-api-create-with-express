const express = require("express");

const booksRouter = express.Router();

const { findAll, createOne } = require("./controller");

booksRouter.get("/", findAll);

booksRouter.post("/", createOne);

module.exports = booksRouter;

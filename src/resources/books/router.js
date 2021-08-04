const express = require("express");

const { findAll, createOne } = require("./controller");

const booksRouter = express.Router();

booksRouter.get("/", findAll);

booksRouter.post("/", createOne);

module.exports = booksRouter;

const { getAllBooks, addBooks, getBooks } = require("../contorller.js/book.controller");


const bookRouter = require("express").Router();

bookRouter.get('/',getAllBooks);
bookRouter.post('/addBooks',addBooks)
bookRouter.get('/getbooks',getBooks)

module.exports = bookRouter;
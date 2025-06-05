const { getAllBooks, addBooks, getBooks, deleteBooks } = require("../contorller.js/book.controller");


const bookRouter = require("express").Router();

bookRouter.get('/', getAllBooks);
bookRouter.post('/addBooks', addBooks)
bookRouter.get('/getbooks', getBooks)
bookRouter.delete("/deleteBooks", deleteBooks)

module.exports = bookRouter;
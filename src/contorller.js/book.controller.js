const db = require("../config/dbConfig")
exports.getAllBooks = (req, res) => {
    getBooksQuery = "SELECT * FROM books";
    db.query(getBooksQuery, (err, results) => {
        if (err) {

            return res.status(500).json({ error: err });
        }
        res.status(200).json(results);
    });
}


exports.addBooks = (req, res) => {
    let books = req.body;
    if (!Array.isArray(books) || books.length === 0) {
        return res.status(400).json({ error: "send an array of book(s) Object" })
    }

    books = books.map((book) => [book.Name, book.Author, book.Price, book.Pages]);
    insertQuery = "INSERT INTO books (name, author, price, pages) VALUES ?";

    db.query(insertQuery, [books], (err, result) => {
        if (err) {
            return res.status(400).json({ error: err.sqlMessage });
        }
        res.status(200).json({ message: `${result.affectedRows} books added.` })


    })
}

exports.getBooks = (req, res) => {
    let { id, name, author } = req.body;

    if (!id && !name && !author) {
        return res.status(400).json({ message: "please provide id, name or author." })
    }

    let condition = []
    let values = []

    if (id !== undefined) {
        condition.push("id = ?");
        values.push(id)
    }
    if (name !== undefined) {
        condition.push("name = ? ");
        values.push(name)
    }
    if (author !== undefined) {
        condition.push("author = ?");
        values.push(author);
    }

    let fetchQuery = `SELECT * FROM books WHERE ${condition.join(" OR ")}`
    console.log(fetchQuery);


    db.query(fetchQuery, values, (err, result) => {
        if (err) {
            return res.status(400).json({ error: err.sqlMessage })
        }
        res.status(200).json({ message: result })

    })

}

exports.deleteBooks = (req, res) => {
    const { id, name } = req.body;
    if (!id && !name) {
        return res.status(400).json({ message: "Please provide id or name" })
    }
    let condition = []
    let values = []
    if (id !== undefined) {
        condition.push(" id = ?");
        values.push(id)
    }

    if (name !== undefined) {
        condition.push("name = ?");
        values.push(name)
    }

    const finalQuerry = `DELETE FROM books WHERE ${condition.join(" OR ")} `
    db.query(finalQuerry, values, (err, result) => {
        if (err) {
            return res.status(400).json({ error: err.sqlMessage });
        }

        if (result.affectedRows > 0) {
            res.status(200).json({ message: `${result.affectedRows} rows affected` });
        } else {
            res.status(200).json({ message: "no match found" })
        }

    })

}
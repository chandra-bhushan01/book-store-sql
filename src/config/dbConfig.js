const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: "",
    database: process.env.DB_DATABASE
})

db.connect((err) => {
    if (err) {
        console.log("error while connecting to database: " + err);
    }
    else {
        console.log("connected to DB")
    }
})

module.exports = db;
const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bookstore"
})

db.connect((err)=>{
    if(err){
        console.log("error while connecting to database: " + err);
    }
    else{
        console.log("connected to DB")
    }
})

module.exports = db;
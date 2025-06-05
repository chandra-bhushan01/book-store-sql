const express = require("express")
require('dotenv').config();
const bookRouter = require("./route/bookRoutes");

const app = express();

app.use(express.json());
app.use('/', bookRouter)

app.listen(process.env.PORT, () => {
    console.log(`app running on http://localhost:${process.env.PORT}`)
})
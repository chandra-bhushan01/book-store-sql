const express = require("express")


const bookRouter = require("./route/bookRoutes");
const app = express();



app.use(express.json());

app.use('/',bookRouter)

app.listen(3000,()=>{
    console.log(`app running on http://localhost:3000`)
})
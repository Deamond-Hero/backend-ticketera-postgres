const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./routes/index")

const app = express();

app.use(morgan("dev"))

app.use(express.json())

app.use((req,res,next)=>{
    console.log("Hola pase por el middleware")
    next();
})

app.use(mainRouter)


module.exports = app;
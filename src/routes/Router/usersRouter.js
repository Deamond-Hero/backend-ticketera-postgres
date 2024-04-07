const {Router} = require("express");
const usersRouter = Router()

usersRouter.get("/", (req,res)=>{
    res.send("users")
})

usersRouter.get("/:id", (req,res)=>{
    const { id } = req.params;
    console.log(id)
    res.send(`El id es ${id}`)
})


usersRouter.post("/", (req,res)=>{
    res.send("users post")
})


module.exports = usersRouter;
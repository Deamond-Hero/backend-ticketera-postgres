const { Router } = require("express")

const ticketsRouter = Router();

ticketsRouter.get("/", (req, res) => {
    res.send("tickets")
})

ticketsRouter.post("/", (req, res) => {
    res.send("tickets post")
})


module.exports = ticketsRouter;
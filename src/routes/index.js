const { Router }= require("express")
const usersRouter = require("./Router/usersRouter")
const ticketsRouter = require("./Router/ticketsRouter")

const mainRouter = Router();

mainRouter.use("/users", usersRouter)
mainRouter.use("/tickets", ticketsRouter)


module.exports =mainRouter;
const { Sequelize } = require("sequelize")
require("dotenv").config()
const UserModel = require("./models/User")
const TicketModel = require("./models/Ticket")
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/ticketera`,{logging:false})

UserModel(sequelize);
TicketModel(sequelize);


console.log(sequelize.models)

const { User , Ticket } = sequelize.models;

//Relaciones
User.hasMany(Ticket); //Un usuario puede tener varios tickets
Ticket.belongsTo(User)  //Un ticket pertenece a un usuario

module.exports = { sequelize, ...sequelize.models };
const express =require("express")

const routes = express.Router()

routes.get("/home" ,(rep, res) =>{
    res.send("Welcome home!")
})
routes.get("/about" ,(rep, res) =>{
    res.send("Welcome about!")
})
routes.get("/contact" ,(rep, res) =>{
    res.send("Welcome contact!")
})

module.exports = routes
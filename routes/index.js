var express = require("express");
var app = express();




app.get("/", (req,res) => {

    /*  logica para obtener el nombre del usuario    */
    var user = "Francisco";

    res.render('pages/home', {title: 'Home', usuario: user});
})

app.get("/altas", (req,res) => {
    res.send("Bienvenido a Altas");
})

app.get("/bajas", (req,res) => {
    res.send("Bienvenido a Bajas");
})

module.exports = app;
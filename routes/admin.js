var express = require("express");
var app = express();

var items = [
    {name:'node.js',url:'https://nodejs.org/en/'},
    {name:'ejs',url:'https://ejs.co'},
    {name:'expressjs',url:'https://expressjs.com'},
];

app.get("/", (req,res) => {
    //res.send("Bienvenido a Admin");
    res.render("pages/admin", {title: "Admin", items, isAdmin: true});
})

app.get("/altas", (req,res) => {
    res.send("Bienvenido a Admin Altas");
})

app.get("/bajas", (req,res) => {
    res.send("Bienvenido a Admin Bajas");
})

module.exports = app;
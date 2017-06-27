const express = require("express");
const app = express();
const bodyparser = require('body-parser');
const Eleve = require("./eleve.js");
const pug = require('pug');

app.set('views','./views');
app.set('view engine','pug');

app.get("/", (req,res)=>{
    res.render('index');
});

app.post("/", (req,res)=>{
    let nom=req.body.nom;
    let prenom=req.body.prenom;
    console.log(nom)
});
//let eleve1 = new Eleve(nom,prenom)
app.listen(1337,() => {
    console.log("tout est ok");
 //   console.log(eleve1.nom);
 //   console.log(eleve1.prenom);
});
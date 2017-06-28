const express = require("express");
const app = express();
const bodyparser = require('body-parser');
const Eleve = require("./eleve.js");
const pug = require('pug');

app.set('views','./views');
app.set('view engine','pug');

app.use(bodyparser.urlencoded({extend:false}));
app.use(bodyparser.json());

app.get("/", (req,res)=>{
    res.render('index');
});

let nom
let prenom

app.post("/", (req,res)=>{
    nom=req.body.nom;
    prenom=req.body.prenom;
    res.render('index', {nomRetour:nom,prenomRetour:prenom})
    console.log(nom);
    console.log(prenom);
});

app.get("/page2", (req,res)=>{
  res.render('page2',{nomRetour:nom,prenomRetour:prenom});
});

//let eleve1 = new Eleve(nom,prenom)
app.listen(1337,() => {
    console.log("tout est ok");
 //   console.log(eleve1.nom);
 //   console.log(eleve1.prenom);
});
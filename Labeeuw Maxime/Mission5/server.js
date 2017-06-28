const express = require("express");
const app = express();
const bodyparser = require('body-parser');
const Eleve = require("./eleve.js")



app.get("/", (req,res)=>{
    res.write("<html><body><form method='post'>nom : <input type='text'name='nom'/>prenom : <input type='text'name='prenom'/><input type='submit'/></form></body></html>");
    res.end("");
});

app.post("/", (req,res)=>{
    let nom=req.body.nom;
    let prenom=req.body.prenom;
    console.log("nom")
});
//let eleve1 = new Eleve(nom,prenom)
app.listen(1337,() => {
    console.log("tout est ok");
 //   console.log(eleve1.nom);
 //   console.log(eleve1.prenom);
});
const express = require("express");
const app = express();
const Eleve = require("./eleve.js")

let eleve1 = new Eleve("LABEEUW","Maxime")

app.get("/", (req,res)=>{
    res.write("Coucou");
    res.write(eleve1.nom);
    res.write(eleve1.prenom);
    res.end("fin");
});

app.get("/test", (req,res)=>{
    res.send("test");
});

app.listen(1337,() => {
    console.log("tout est ok");
    console.log(eleve1.nom);
    console.log(eleve1.prenom);
});
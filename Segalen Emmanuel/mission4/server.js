const Eleve = require ('./eleve.js')
const express = require("express");
const app = express();

let eleve = new Eleve ("manu","segalen")
let note = new note ("12-12-12",12);
eleve.ajouterNote(note);

app.get("/",(req, res) => {
    res.send("salut" + eleve.nom + "tu as la moyenne de " + eleve.calculerMoyenne());
} );


app.listen(3000, () => {
console.log(eleve.nom);
});
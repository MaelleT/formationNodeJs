const Eleve=require("./Eleve.js");
const Prof=require("./Prof.js");
const Matiere=require("./Matiere.js");
const Note=require("./Note.js");
const express=require('express');
const app=express();

let eleve = new Eleve("berneau","antoine");


let prof = new Prof("buffet","xavier");


let mat = new Matiere("node",prof);


let note = new Note(100,"26-06-2017",mat);
eleve.ajouterNote(note);
note = new Note(50,"27-06-2017",mat);
eleve.ajouterNote(note);
app.get("/",(req,res)=>{
    let str = res.write(eleve.nom);
    res.send(str);
})

app.listen(3000,()=>{

});
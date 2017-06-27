"use strict";

const express = require('express');
const bodyParser = require('body-parser');

const Eleve = require('./eleve');
const Cours = require('./cours');
const Prof = require('./prof');
const Note = require('./note');


let listeEleves = new Array();

let id=1;

let eleve1 = new Eleve(id++,"Boissonnot","Evan");
let eleve2 = new Eleve(id++,"Taurand","Maelle");

listeEleves.push(eleve1);
listeEleves.push(eleve2);

let cours = new Cours("Maths",2,new Prof("Super","Man"));

let d = new Date();

eleve1.ajouterNote(12, cours,d);
eleve1.ajouterNote(13, cours,d);
eleve2.ajouterNote(14, cours,d);
eleve2.ajouterNote(15, cours,d);
eleve2.ajouterNote(16, cours,d);


const app=express();

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded()); // to support URL-encoded bodies

app.set('views','./views');
app.set('view engine','pug');

app.listen(80,"127.0.0.1",() => {
    console.log("Serveur OK");
});

app.get("/", (req,res) => {
    console.log("Nouvelle requete");
    res.render('index');
});

app.get("/continuer", (req,res) => {
    console.log("Nouvelle requete");
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.statusCode = 200;
    res.write("<b>Perdu !!!</b>");
    res.end();
});

app.get("/eleves/", (req,res) => {
    res.render('eleves',{listeEleves: listeEleves});
});

app.get("/eleve/:id", (req,res) => {
    let eleve = listeEleves[parseInt(req.params.id)-1];
    res.render('eleve',{eleve: eleve});
});

app.get("/eleve", (req,res) => {
    res.render('ajoutEleve');
});

app.post("/eleve", (req,res) => {
    let prenom = req.body.prenom;
    let nom = req.body.nom;

    let eleve = new Eleve(id++,nom,prenom);
    
    listeEleves.push(eleve);

    res.render('ajoutEleve',{eleve: eleve});

});

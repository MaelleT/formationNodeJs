const express = require('express');
const Eleve = require('./eleve');
const Cours = require('./cours');
const Prof = require('./prof');
const Note = require('./note');


let listeEleves = new Array();

let eleve1 = new Eleve(1,"Boissonnot","Evan");
let eleve2 = new Eleve(2,"Taurand","Maelle");

listeEleves.push(eleve1);
listeEleves.push(eleve2);

let prof1 = new Prof("Super","Man");

let cours = new Cours("Maths",2,prof1);

eleve1.ajouterNote(12, cours);
eleve1.ajouterNote(13, cours);
eleve2.ajouterNote(14, cours);
eleve2.ajouterNote(15, cours);
eleve2.ajouterNote(16, cours);


const app=express();

app.listen(80,"127.0.0.1",() => {
    console.log("Serveur OK");
});

app.get("/", (req,res) => {
    console.log("Nouvelle requete");
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.statusCode = 200;
    res.write("<H1>Bienvenue sur la page d'accueil</H1><BR><hr>");
    res.write('<a href="/eleves">Liste des élèves</a><br>');
    res.write('<a href="continuer">continuer</a>');

    res.end();
});

app.get("/continuer", (req,res) => {
    console.log("Nouvelle requete");
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.statusCode = 200;
    res.write("<b>Perdu !!!</b>");
    res.end();
});

app.get("/eleves/", (req,res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.statusCode = 200;
    res.write('<H1>Liste des élèves</H1><HR>');
    listeEleves.forEach(
        (eleve) => {res.write('<a href="/eleve/'+ eleve.id +'">'+ eleve.toString()+'</a><br>');}
    );
    res.end();
});

app.get("/eleve/:id", (req,res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.statusCode = 200;
    res.write('Eleve numero ' + req.params.id + '<br>');
    let eleve = listeEleves[parseInt(req.params.id)-1];
    res.write(eleve.toString());
    res.write(`<br>Liste des notes : ${eleve.getNotes()}`)
    res.write('<hr><a href="/eleves">Retour à la liste des élèves</a>');
    res.end();
});
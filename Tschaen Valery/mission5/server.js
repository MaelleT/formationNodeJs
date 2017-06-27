"use strict";



const express = require('express');
const bodyParser = require('body-parser');

const Eleve = require('./eleve');
const Cours = require('./cours');
const Prof = require('./prof');
const Note = require('./note');


let listeEleves = new Array();

let id=1;

listeEleves.push(new Eleve(id++,"Boissonnot","Evan"));
listeEleves.push(new Eleve(id++,"Taurand","Maelle"));

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
    res.write(`<br>Liste des notes :<br> ${eleve.getNotes()}`)
    res.write('<hr><a href="/eleves">Retour à la liste des élèves</a>');
    res.end();
});

app.get("/eleve", (req,res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.statusCode = 200;
    res.write(`
        <form method="post" action="/eleve">
        <H1> Création d'un nouvel élève</H1>
        <BR>
        <p>
            <input type="text" name="prenom" />
            <input type="text" name="nom" />
            <input type="submit" />
        </p>
        </form>

    `);
    res.end();
});

app.post("/eleve", (req,res) => {
    let prenom = req.body.prenom;
    let nom = req.body.nom;

    let eleve = new Eleve(id++,nom,prenom);
    
    listeEleves.push(eleve);

   res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.statusCode = 200;
    res.write(`
        <H1> Création OK</H1>
        <BR>
        <hr><a href="/eleves">Retour à la liste des élèves</a>
    `);
    res.end();

});

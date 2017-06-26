const express = require('express');
const Eleve = require('./eleve');

let listeEleves = new Array();

listeEleves.push(new Eleve("Boissonnot","Evan"));
listeEleves.push(new Eleve("Taurand","Maelle"));

const app=express();

app.listen(80,"127.0.0.1",() => {
    console.log("Serveur OK");
});

app.get("/", (req,res) => {
    console.log("Nouvelle requete");
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.statusCode = 200;
    res.write("<H1>Bienvenue sur la page d'accueil</H1><BR><hr>");
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
    console.log("Nouvelle requete");
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.statusCode = 200;
    listeEleves.forEach(
        (eleve) => res.write(eleve.toString()+'<br>')
    );
    res.end();
});

app.get("/eleve/:id", (req,res) => {
    console.log("Nouvelle requete");
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.statusCode = 200;
    res.write('Eleve numero ' + req.params.id + '<br>');
    res.write(eleve.toString());
    res.end();
});
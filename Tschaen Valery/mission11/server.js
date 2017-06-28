"use strict";

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

eleve1.ajouterNote(12,cours,d);
eleve1.ajouterNote(13,cours,d);
eleve2.ajouterNote(14,cours,d);
eleve2.ajouterNote(15,cours,d);
eleve2.ajouterNote(16,cours,d);
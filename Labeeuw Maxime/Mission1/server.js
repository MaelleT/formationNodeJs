var Eleve = require('./eleve.js');
var Professeur = require('./professeur.js');
var Note = require('./Note.js');

var eleve1 = new Eleve('Eleve1','prenom1');
console.log(eleve1.getNom());
var eleve2 = new Eleve('Eleve2','prenom2');

var professeur1 = new Professeur ('LABEEUW', 'Maxime', 'SI')
console.log(professeur1.getNom());
var note1 = new Note ('eleve1','professeur1', '16', 'SI', '16.10.2016')
eleve1.ajouterNote(note1)
var note2 = new Note ('eleve1','professeur1', '10', 'SI', '16.10.2016')
console.log(eleve1.calculMoyenne());
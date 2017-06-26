const Eleve = require('./eleve.js');
const Professeur = require('./professeur.js');
const Note = require('./Note.js');

let eleve1 = new Eleve('Eleve1','prenom1');
console.log(eleve1.nom);
let eleve2 = new Eleve('Eleve2','prenom2');

let professeur1 = new Professeur ('LABEEUW', 'Maxime', 'SI')
console.log(professeur1.getNom());
let note1 = new Note ('eleve1','professeur1', '16', 'SI', '16.10.2016')
eleve1.ajouterNote(note1)
let note2 = new Note ('eleve1','professeur1', '10', 'SI', '16.10.2016')
console.log(eleve1.calculMoyenne());
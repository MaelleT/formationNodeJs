const Eleve = require('./eleve.js');
const Professeur = require('./professeur.js');
const Note = require('./note.js');



let professeur = new Professeur('degenes','pg');

let eleve = new Eleve('segalen','manu');
let eleve1 = new Eleve ('labeeuw','maxime');


let note = new Note("12-12-2017", 12);
eleve.ajouterNote(note);
 note = new Note("15-12-2017", 10);
eleve.ajouterNote(note);
eleve.calculerMoyenne();

console.log(eleve.calculerMoyenne());
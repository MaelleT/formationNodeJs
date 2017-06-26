var Eleve = require('./eleve.js');
var Cours = require('./cours.js');
var Prof = require('./prof.js');

var prof = new Prof("Super","Man");
var cours = new Cours("Dev",prof);

var eleve = new Eleve("Evan","Boissonnot");

eleve.ajouterNote(16,cours,new Date());
eleve.ajouterNote(12,cours,new Date());

console.log(eleve.getNom(),eleve.getPrenom());
eleve.afficherNotes(console.log);


console.log("Moyenne :",eleve.getMoyenne());

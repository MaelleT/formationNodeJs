var Eleve = require('./eleve.js');
var Cours = require('./cours.js');
var Prof = require('./prof.js');

var unProf = new Prof(nom='Taurand',prenom='Maelle');
//console.log(unProf.getNom());


var unCours = new Cours(libelle='SLAM4',unProf);
var unCours2 = new Cours(libelle='SLAM5',unProf);

//console.log(unCours.getlibelle());


var unEleve = new Eleve(nom='toto',prenom='titi');

unEleve.ajouterNoteMatiere(16,unCours);
unEleve.ajouterNoteMatiere(18,unCours);
unEleve.ajouterNoteMatiere(18,unCours2);


unEleve.afficherNotes(console.log);

console.log(unEleve.calculerMoyenneMatiere(unCours));
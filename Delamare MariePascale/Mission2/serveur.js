//include des autres classes
var Eleve = require('./eleve.js');
var Professeur = require('./professeur.js') ;
var Matiere = require('./matiere.js') ;

var eleve1 = new Eleve('Charles', 'Gunt') ;
console.log(eleve1.nom);
console.log(eleve1.prenom);

var eleve2 = new Eleve('Olivier', 'Truc') ;
console.log(eleve2.nom);
console.log(eleve2.prenom);

var prof = new Professeur('Maelle', 'Taurand') ;
console.log(prof.getNom());
console.log(prof.getPrenom());

var matiere1 = new Matiere('Histoire') ;
console.log(matiere1.getLibelle());

var matiere2 = new Matiere('Geographie') ;
console.log(matiere2.getLibelle());

eleve1.ajouterNote (16, 'Histoire');
eleve1.ajouterNote (14, 'Geographie');
eleve1.ajouterNote (12, 'Histoire');
eleve1.ajouterNote (11, 'Geographie');


eleve2.ajouterNote (6, 'Histoire');
eleve2.ajouterNote (5, 'Geographie');

console.log(eleve1.notes);
console.log(eleve2.notes);

console.log('Moyenne de l\'eleve ' + eleve1.nom + ' est de  : ' + eleve1.moyenneGenerale());
console.log('Moyenne de l\'eleve ' + eleve2.nom + ' est de  : ' + + eleve2.moyenneGenerale());

console.log('Moyenne de l\'eleve ' + eleve1.nom + ' pour la matiere Histoire est de  : ' + eleve1.moyenneMatiere('Histoire'));
console.log('Moyenne de l\'eleve ' + eleve1.nom + ' pour la matiere Geographie est de  : ' + eleve1.moyenneMatiere('Geographie'));
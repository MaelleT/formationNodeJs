//ici on crée la classe Eleve
var Note = require('./note.js') ;

function Eleve(nom, prenom) {
	 this._nom = nom ;
	 this._prenom = prenom ;
	 this._notes = [];
}
//ici on met les méthodes de la classes
Eleve.prototype.getNom = function() {
	return(this._nom);
}
Eleve.prototype.getPrenom = function() {
	return(this._prenom);
}
Eleve.prototype.getNotes = function() {
	return(this._notes);
}


Eleve.prototype.ajouterNote = function(valeur, matiere) {
	var notesaisie = new Note (valeur, matiere) ;
	this._notes.push(notesaisie) ;
}


Eleve.prototype.moyenneGenerale = function() {
	var somme = 0.0 ;
	var longueur = this._notes.length ;
		for (var i=0; i<longueur; i++) {
			somme = somme + this._notes[i].getNote();
		}	
	return somme/longueur ;
}


module.exports = Eleve;
//ici on crée la classe Eleve
const Note = require('./note.js') ;

class Eleve {
	constructor (nom, prenom) {
		this._nom = nom ;
		this._prenom = prenom ;
		this._notes = [];
	}
//ici on met les méthodes de la classes
get nom () {
	return(this._nom);
}
get prenom () {
	return(this._prenom);
}
get notes() {
	return(this._notes);
}

set nom (leNom) {
	this._nom = leNom ;
}
set prenom (lePrenom) {
	this._prenom = lePrenom ;
}


ajouterNote(valeur, matiere) {
	let notesaisie = new Note (valeur, matiere) ;
	this._notes.push(notesaisie) ;
}

moyenneGenerale() {
	let somme = 0.0 ;
	let longueur = this._notes.length ;
		for (var i=0; i<longueur; i++) {
			somme = somme + this._notes[i].getNote();
		}	
	return somme/longueur ;
}

moyenneMatiere(laMatiere) {
	let somme = 0.0 ;
	let j = 0 ;
	let longueur = this._notes.length ;
		for (var i=0; i<longueur; i++) {
			if(laMatiere == this._notes[i].getMatiere) {
				somme = somme + this._notes[i].getNote();
				j++
			}
		}	
	return somme/j ;
}

}

module.exports = Eleve;
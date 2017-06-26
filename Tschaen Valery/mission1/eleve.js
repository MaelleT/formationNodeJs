var Note=require('./note.js');
var Cours=require('./cours.js');


/*
 * Classe Eleve
 */

/*
 * Constructeur
 */

Eleve = function Eleve(nom, prenom){
	
	this._nom = nom;
	this._prenom = prenom;
	this._notes = new Array();

}

/*
 * afficherNom
 */

Eleve.prototype.afficherNom = function (){
	console.log("Mon nom est", this._nom, this._prenom);
	return this._nom;
};

/*
 * Getters et Setters
 */

Eleve.prototype.getNom = function(){
	return this._nom;
}

Eleve.prototype.getPrenom = function(){
	return this._prenom;
}

Eleve.prototype.setNom = function(nom){
	return this._nom = nom;
}

Eleve.prototype.setPrenom = function(prenom){
	return this._prenom = prenom;
}

Eleve.prototype.ajouterNote = function(valeur, cours){
	var note = new Note(valeur,cours);
	return this._notes.push(note);
}

Eleve.prototype.afficherNotes = function(display){
	this._notes.forEach(function(note) {
		display(note.getString());
	});
}

Eleve.prototype.getMoyenne = function(){
	var total = 0;
	this._notes.forEach(function(note) {
		total+=note.getValeur();
	});
	return total/this._notes.length;
}

module.exports = Eleve;

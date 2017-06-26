/*
 * Classe Note
 */

/*
 * Constructeur
 */

function Note(valeur,cours,date){
	
	this._valeur = valeur;
	this._cours = cours;
	this._date = date;

}

/*
 * afficherNote
 */

Note.prototype.afficherNote = function (){
	console.log("La note est", this._valeur, "pour le cours :",this._cours.getCours());
	return this._valeur;
};

/*
 * Getters et Setters
 */

Note.prototype.getValeur = function(){
	return this._valeur;
}

Note.prototype.setValeur = function(valeur){
	return this._valeur = valeur;
}

Note.prototype.getCours = function(){
	return this._cours.getCours();
}

Note.prototype.setCours = function(cours){
	return this._cours.setCours(cours);
}

Note.prototype.toString = function(){
	return this._cours.getIntitule() + ' ' + this._valeur + ' ' + this._date;
}

module.exports = Note;

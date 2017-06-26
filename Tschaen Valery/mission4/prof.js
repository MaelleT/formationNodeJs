"use strict";

/*
 * Classe Prof
 */

/*
 * Constructeur
 */

function Prof(nom, prenom){
	
	this._nom = nom;
	this._prenom = prenom;

}

/*
 * afficherNom
 */

Prof.prototype.afficherNom = function (){
	console.log("Mon nom est", this._nom, this._prenom);
	return this._nom;
};

/*
 * Getters et Setters
 */

Prof.prototype.getNom = function(){
	return this._nom;
}

Prof.prototype.getPrenom = function(){
	return this._prenom;
}

Prof.prototype.setNom = function(nom){
	return this._nom = nom;
}

Prof.prototype.setPrenom = function(prenom){
	return this._prenom = prenom;
}

module.exports = Prof;

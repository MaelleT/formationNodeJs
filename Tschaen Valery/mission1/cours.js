/*
 * Classe Cours
 */

/*
 * Constructeur
 */

function Cours(intitule, coef, prof){
	
	this._intitule = intitule;
	this._coef = coef;
	this._prof = prof

}

/*
 * afficherCours
 */

Cours.prototype.afficherCours = function (){
	console.log("Intitule :",this._intitule,"Coef :",this._coef);
	return this._intitule;
};

/*
 * Getters et Setters
 */

Cours.prototype.getIntitule = function(){
	return this._intitule;
}

Cours.prototype.getCoef = function(){
	return this._coef;
}

Cours.prototype.getProf = function(){
	return this._prof;
}

Cours.prototype.setIntitule = function(intitule){
	return this._intitule = intitule;
}

Cours.prototype.setCoef = function(coef){
	return this._coef = coef;
}

Cours.prototype.setProf = function(prof){
	return this._prof = prof;
}

module.exports = Cours;

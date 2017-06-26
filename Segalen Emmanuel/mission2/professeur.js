function Professeur(nom, prenom,matiere) { 
this._nom = nom;
this._prenom = prenom;
this.matiere = matiere;

};

Professeur.prototype.getNom = function() {
	return this._nom;
};
Professeur.prototype.getPrenom = function() {
	return this._prenom;
};

Professeur.prototype.getMatiere = function() {
	return this._matiere;
};

module.exports = Professeur;
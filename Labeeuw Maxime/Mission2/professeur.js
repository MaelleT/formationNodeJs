console.log("professeur");

function Professeur(nom, prenom, matiere) {
	this._nom = nom;
	this._prenom = prenom;
	this._matiere = matiere;
};

Professeur.prototype.getNom= function() {
	return this._nom;
}

Professeur.prototype.getPrenom= function() {
	return this._prenom;
}

Professeur.prototype.getMatiere= function() {
	return this._matiere;
}

module.exports = Professeur;

/*var professeur = new Professeur ('LABEEUW', 'Maxime', 'SI');
console.log(professeur.getNom());
console.log(professeur.getPrenom());
console.log(professeur.getMatiere());
*/
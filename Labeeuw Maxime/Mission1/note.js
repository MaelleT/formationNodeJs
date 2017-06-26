console.log("professeur");

function Note(eleve, professeur, valeur, matiere, date) {
	this._eleve = eleve;
	this._professeur = professeur ;
	this._valeur = valeur;
	this._matiere = matiere;
	this._date = date;
};

Note.prototype.getEleve= function() {
	return this._Eleve;
}

Note.prototype.getProfesseur= function() {
	return this._Professeur;
}

Note.prototype.getValeur= function() {
	return this._valeur;
}

Note.prototype.getMatiere= function() {
	return this._matiere;
}

Note.prototype.getDate= function() {
	return this._Date;
}

module.exports = Note;

/*var professeur = new Professeur ('LABEEUW', 'Maxime', 'SI');
console.log(professeur.getNom());
console.log(professeur.getPrenom());
console.log(professeur.getMatiere());
*/
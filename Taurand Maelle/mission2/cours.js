// auteur : maelle

function Cours(libelle = 'unCours',unEnseignant) {
	this._libelle = libelle;
	this._lenseignant = unEnseignant;
};

/*methode de la classe Cours*/
Cours.prototype.getLibelle= function() {
	return this._libelle;
};


Cours.prototype.getLEnseignant= function() {
	return this._lenseignant;
}

module.exports = Cours;

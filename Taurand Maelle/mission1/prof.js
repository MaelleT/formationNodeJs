// auteur : maelle

function Prof(nom = 'nom',prenom = 'prenom') {
	this._nom = nom;
	this._prenom = prenom;
	//console.log('Je m\'appelle ' + this._nom + ' ' + this._prenom);

};

/*methode de la classe Prof*/
Prof.prototype.getNom= function() {
	return this._nom;
};

/*methode de la classe Prof*/
Prof.prototype.getPrenom= function() {
	return this._nom;
};

module.exports = Prof;

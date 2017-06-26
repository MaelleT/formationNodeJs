// auteur : maelle

function Note(valeur = 'note',cours = 'unCours') {
	this._valeur = valeur;
	this._cours = cours;

};

/*methode de la classe Note*/
Note.prototype.getValeur= function() {
	return this._valeur;
};

/*methode de la classe Note*/
Note.prototype.getCours= function() {
	return this._cours;
};

module.exports = Note;

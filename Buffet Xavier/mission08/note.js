
function Note(valeur,date,matiere) {
	this._valeur = valeur;
	this._date=date;
	this._matiere=matiere
}

Note.prototype.getValeur = function() {
	return this._valeur;
}

Note.prototype.getMatiere = function() {
	return this._matiere;
}

module.exports=Note;


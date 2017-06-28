
function Prof(nom,prenom) {
	this._nom = nom;
}

Prof.prototype.getNom = function() {
	return this._nom;
}

module.exports=Prof;

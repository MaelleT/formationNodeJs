// ici on cr�e la classe Eleve
function Matiere(libelle) {
	 this._libelle = libelle ;
}
// ici on met les m�thodes de la classes
Matiere.prototype.getLibelle = function() {
	return(this._libelle);
}

module.exports = Matiere;
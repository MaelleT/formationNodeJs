// ici on crée la classe Eleve
function Matiere(libelle) {
	 this._libelle = libelle ;
}
// ici on met les méthodes de la classes
Matiere.prototype.getLibelle = function() {
	return(this._libelle);
}

module.exports = Matiere;
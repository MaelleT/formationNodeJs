// ici on cr�e la classe Eleve
function Professeur(nom, prenom) {
	 this._nom = nom ;
	 this._prenom = prenom ;
}
// ici on met les m�thodes de la classes
Professeur.prototype.getNom = function() {
	return(this._nom);
}
Professeur.prototype.getPrenom = function() {
	return(this._prenom);
}
module.exports = Professeur;
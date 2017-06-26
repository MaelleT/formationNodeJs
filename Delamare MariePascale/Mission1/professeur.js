// ici on crée la classe Eleve
function Professeur(nom, prenom) {
	 this._nom = nom ;
	 this._prenom = prenom ;
}
// ici on met les méthodes de la classes
Professeur.prototype.getNom = function() {
	return(this._nom);
}
Professeur.prototype.getPrenom = function() {
	return(this._prenom);
}
module.exports = Professeur;
// ici on cr�e la classe Eleve
function Note(valeur, matiere) {
	 
	 if (valeur >=0 && valeur <=20){this._valeur = valeur} ;
	 this._matiere = matiere ;
}
// ici on met les m�thodes de la classes
Note.prototype.getNote = function() {
	return(this._valeur);
}
Note.prototype.getMatiere = function() {
	return(this._matiere);
}
module.exports = Note;
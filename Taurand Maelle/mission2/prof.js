// auteur : maelle
class Prof {
	
constructor (nom = 'nom',prenom = 'prenom') {
	this._nom = nom;
	this._prenom = prenom;
	//console.log('Je m\'appelle ' + this._nom + ' ' + this._prenom);

};

/*methode de la classe Prof*/
get nom() {
	return this._nom;
};

/*methode de la classe Prof*/
get prenom() {
	return this._nom;
};
}
module.exports = Prof;

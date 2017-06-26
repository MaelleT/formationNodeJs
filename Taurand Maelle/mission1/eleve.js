// auteur : maelle

function Eleve(nom = 'nom',prenom = 'prenom') {
	this._nom = nom;
	this._prenom = prenom;
	//console.log('Je m\'appelle ' + this._nom + ' ' + this._prenom);

};

/*methode de la classe Eleve*/
Eleve.prototype.getNom= function() {
	return this._nom;
};

/*methode de la classe Eleve*/
Eleve.prototype.getPrenom= function() {
	return this._nom;
};

/*methode de la classe Eleve*/
Eleve.prototype.setNom= function(unNom) {
	this._nom = unNom;
};

Eleve.prototype.setPrenom= function(unNom) {
	this._nom = unNom;
};



var eleve = new Eleve(nom='Taurand',prenom='Maelle');
//eleve.get_nom();
console.log(eleve.getNom());
eleve.setNom(nom='Truc');
console.log(eleve.getNom());

console.log("eleve");

function Eleve(nom, prenom) {
	this._nom = nom;
	this._prenom = prenom;
	this._note = [];
};


Eleve.prototype.getNom= function() {
	return this._nom;
}

Eleve.prototype.getPrenom= function() {
	return this._Prenom;
}

Eleve.prototype.ajouterNote= function(note) {
	this._note.push(note);
}

Eleve.prototype.calculMoyenne = function() {
	var moyenne=0;
	var somme=0;
	
	for(var i=0; i<this._note.length;i++){
		somme = somme + this._note[i].getValue();
		moyenne=somme/this._note.length;
	}
	return(moyenne);
}



module.exports = Eleve;
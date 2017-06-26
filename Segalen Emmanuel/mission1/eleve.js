

function Eleve(nom, prenom) { 
this._nom = nom;
this._prenom = prenom;
this._notes = [];

};



Eleve.prototype.getNom = function() {
	return this._nom;
};
Eleve.prototype.getPrenom = function() {
	return this._prenom;
};

Eleve.prototype.ajouterNote = function(note) {
	
	this._notes.push(note);
	
};
Eleve.prototype.calculerMoyenne = function() {
	
	var moyenne;
	var somme =0;
	for(var i=0;i<this._notes.length;i++)
	{
		somme+= this._notes[i].getValue();
	}
	moyenne = somme / this._notes.length;
	
	return(moyenne);
	
};

module.exports = Eleve;
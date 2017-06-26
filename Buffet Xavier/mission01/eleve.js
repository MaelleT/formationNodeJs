
function Eleve(nom,prenom) {
	this._nom = nom;
	this._lesNotes=[];
}

Eleve.prototype.getNom = function() {
	return this._nom;
}

Eleve.prototype.ajouterNote = function(note){
	this._lesNotes.push(note);
}	

Eleve.prototype.getMoy = function() {
	var moy=0;
	this._lesNotes.forEach(function(note){
		moy+=note.getValeur()
	})
	return moy/this._lesNotes.length;
}



module.exports=Eleve;


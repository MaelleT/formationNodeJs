// auteur : maelle
var Note = require('./note.js');
var Cours = require('./cours.js');


function Eleve(nom = 'nom',prenom = 'prenom') {
	this._nom = nom;
	this._prenom = prenom;
	//console.log('Je m\'appelle ' + this._nom + ' ' + this._prenom);
	this._mesNotes = [];
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

Eleve.prototype.ajouterNoteMatiere = function(valeur,uneMatiere){
	
	var note = new Note(valeur,uneMatiere);
	this._mesNotes.push(note);
}

Eleve.prototype.afficherNotes = function (display){
	
	this._mesNotes.forEach(function(uneNote) {
		display(uneNote.getValeur());
	});		
}

Eleve.prototype.calculerMoyenneMatiere = function (unCours){
	
	var tot = 0;
	var nb = 0;
	this._mesNotes.forEach(function(uneNote) {
		if (uneNote.getCours().getLibelle() == unCours.getLibelle()){
			tot+=uneNote.getValeur();
			nb +=1; 
		}
	});	
	
	return tot/nb;
}

module.exports = Eleve;


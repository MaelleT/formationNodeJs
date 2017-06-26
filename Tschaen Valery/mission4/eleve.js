const Note=require('./note.js');
const Cours=require('./cours.js');


/*
 * Classe Eleve
 */

class Eleve {
	
	/*
	 * Constructeur
	 */

	constructor(nom, prenom){
		this._nom = nom;
		this._prenom = prenom;
		this._notes = new Array();
	}

/*
 * afficherNom
 */

	afficherNom(){
		console.log("Mon nom est", this._nom, this._prenom);
		return this._nom;
	};

	/*
	 * Getters et Setters
	 */

	get nom(){
		return this._nom;
	}

	set nom(nom){
		this._nom = nom;
	}

	get prenom(){
		return this._prenom;
	}

	set prenom(prenom){
		this._prenom = prenom;
	}


	ajouterNote(valeur, cours){
		let note = new Note(valeur,cours);
		return this._notes.push(note);
	}

	afficherNotes(display){
		this._notes.forEach(function(note) {
			display(note.getString());
		});
	}	

	getMoyenne(){
		let total = 0;
		this._notes.forEach(function(note) {
			total+=note.getValeur();
		});
		return this._notes.length != 0 ? total/this._notes.length : 'pas de note';
	}

	toString(){
		return this._nom + ' ' + this._prenom;
	}
}

module.exports = Eleve;

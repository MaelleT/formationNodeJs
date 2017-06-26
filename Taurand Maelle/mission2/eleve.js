// auteur : maelle
const Note = require('./note.js');
const Cours = require('./cours.js');

class Eleve {
	
	constructor(nom = 'nom',prenom = 'prenom') {
		this._nom = nom;
		this._prenom = prenom;
		//console.log('Je m\'appelle ' + this._nom + ' ' + this._prenom);
		this._mesNotes = [];
	};

	/*methode de la classe Eleve*/
	get nom() {
		return this._nom;
	};
	/*methode de la classe Eleve*/
	set nom(unNom) {
		this._nom = unNom;
	};
	/*methode de la classe Eleve*/
	get prenom() {
		return this._nom;
	};

	

	set prenom(unNom) {
		this._nom = unNom;
	};

	ajouterNoteMatiere(valeur,uneMatiere){
	
		let note = new Note(valeur,uneMatiere);
		this._mesNotes.push(note);
	}

	afficherNotes(display){
	
		this._mesNotes.forEach(function(uneNote) {
		display(uneNote.getValeur());
		});		
	}

	calculerMoyenneMatiere(unCours){
	
		let tot = 0;
		let nb = 0;
		this._mesNotes.forEach(function(uneNote) {
				console.log(uneNote.getCours().getLibelle());
				if (uneNote.getCours().getLibelle() == unCours.getLibelle()){
					tot+=uneNote.getValeur();
					nb +=1; 
					console.log(nb);
				}
		});	
		
		return tot/nb;
	}
}
module.exports = Eleve;


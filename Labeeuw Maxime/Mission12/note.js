console.log("professeur");

class Note {
	constructor(eleve, professeur, valeur, matiere, date) {
		this._eleve = eleve;
		this._professeur = professeur ;
		this._valeur = valeur;
		this._matiere = matiere;
		this._date = date;
	};

	get eleve() {
		return this._eleve();
	}

	getEleve() {
		return this._Eleve;
	}

	getProfesseur() {
		return this._Professeur;
	}

	getValeur() {
		return this._valeur;
	}

	getMatiere() {
		return this._matiere;
	}

	getDate() {
	return this._Date;
	}

};





module.exports = Note;

/*var professeur = new Professeur ('LABEEUW', 'Maxime', 'SI');
console.log(professeur.getNom());
console.log(professeur.getPrenom());
console.log(professeur.getMatiere());
*/
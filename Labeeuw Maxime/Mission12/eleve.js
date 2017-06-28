console.log("eleve");

class Eleve {
	constructor(nom, prenom){
		this._nom = nom;
		this._prenom = prenom;
		this._note = [];
	};
	get nom()
	{
		return this._nom;
	};
	set nom(nom1) {
		this._nom = nom1;
	};
	get prenom()
	{
		return this._prenom;
	};
	set prenom(prenom1){
		this._prenom = prenom1;
	};
	ajouterNote(note) {
		this._note.push(note);
	};
	calculMoyenne () {
		let moyenne=0;
		let somme=0;
		
		if(this._notes.getValeur()!=null){
			for(let i=0; i<this._note.length;i++){
				somme = somme + this._note[i].getValeur();
				moyenne=somme/this._note.length;
			};
			return(moyenne);
		};
	};

};









module.exports = Eleve;
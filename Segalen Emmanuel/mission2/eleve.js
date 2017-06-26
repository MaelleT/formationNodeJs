

class Eleve { 
	constructor (nom, prenom){
		this._nom = nom;
		this._prenom = prenom;
		this._notes = [];
	}
	get nom(){
		return this._nom;
	}
	set nom(nom1){
		this._nom = nom1;
	}
	ajouterNote(note){
	
	this._notes.push(note);
	}
	calculerMoyenne(){
		
		let moyenne;
		let somme =0;
	
		for(let i=0;i<this._notes.length;i++)
		{
		somme+= this._notes[i].getValue();
		}
		moyenne = somme / this._notes.length;
	
	return(moyenne);
	
	};
	
	
};

module.exports = Eleve;
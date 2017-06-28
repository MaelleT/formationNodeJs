class Eleve{
	constructor(nom,prenom){
		this._nom = nom;
		this._prenom=prenom;
		this._lesNotes=[];
	}
	
	get nom(){
		return this._nom;
	}
	set nom(nom){
		this._nom=nom;
	}
	
	get prenom(){
		return this._prenom;
	}
	set prenom(prenom){
		this._prenom=prenom;
	}

	ajouterNote(note){
		this._lesNotes.push(note);
	}
	
	getMoy() {
		let moy=0;
		this._lesNotes.forEach(function(note){
			moy+=note.getValeur()
		})
		return moy/this._lesNotes.length;
	}
	
}	

module.exports=Eleve;


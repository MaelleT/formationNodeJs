class Eleve{
	constructor(nom,prenom){
		this._nom = nom;
		this._lesNotes=[];
	}
	
	get nom(){
		return this._nom;
	}
	set nom(nom){
		this._nom=nom;
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


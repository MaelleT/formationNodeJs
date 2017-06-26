class Note{
	constructor(date,valeur){ 
	this._date = date;
	this._valeur = valeur;	
	}
	
	getValue(){
	return this._valeur;
	}
	
}

module.exports = Note;
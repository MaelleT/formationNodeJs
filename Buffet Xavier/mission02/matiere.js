
function Matiere(lib,prof) {
	this._lib = lib;
	this._prof=prof;
}

Matiere.prototype.getLib = function() {
	return this._lib;
}

Matiere.prototype.getProf = function() {
	return this._prof;
}



module.exports=Matiere;
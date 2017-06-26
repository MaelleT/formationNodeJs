var Eleve=require("./Eleve.js");
var Prof=require("./Prof");
var Matiere=require("./Matiere.js");
var Note=require("./Note.js");

var eleve = new Eleve("berneau","antoine");
console.log(eleve.getNom());

var prof = new Prof("buffet","xavier");
console.log(prof.getNom());

var mat = new Matiere("node",prof);
console.log(mat.getLib());
console.log(mat.getProf().getNom());

var note = new Note(100,"26-06-2017",mat);
eleve.ajouterNote(note);
var note = new Note(50,"27-06-2017",mat);
eleve.ajouterNote(note);
console.log(eleve.getMoy());
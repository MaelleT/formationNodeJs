const Eleve=require("./Eleve.js");
const Prof=require("./Prof");
const Matiere=require("./Matiere.js");
const Note=require("./Note.js");

let eleve = new Eleve("berneau","antoine");
console.log(eleve.nom);

let prof = new Prof("buffet","xavier");
console.log(prof.getNom());

let mat = new Matiere("node",prof);
console.log(mat.getLib());
console.log(mat.getProf().getNom());

let note = new Note(100,"26-06-2017",mat);
eleve.ajouterNote(note);
note = new Note(50,"27-06-2017",mat);
eleve.ajouterNote(note);
console.log(eleve.getMoy());
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const config = require('config');

let con = mysql.createConnection({
  host: config.notes.database.host,
  user: config.notes.database.user,
  password: config.notes.database.password,
  database: config.notes.database.name
});

/* GET notes listing. */
router.get('/', function(req, res, next) {

  let requete = "select * from Personne, Eleve, Note, Cours ";
  requete += "where Personne.Id=Eleve.PersonneId ";
  requete += "and Eleve.Id = Note.EleveId ";
  requete += "and Note.CoursId = Cours.Id ;";

  con.connect(function(err) {
    if (err) throw err;
    con.query(requete, function (err, results) {
    
    if (err) throw err;
    res.render('notes',{title: "Les notes des eleves", lesNotesDesEleves : results});
  });

}); 
  
});

module.exports = router;

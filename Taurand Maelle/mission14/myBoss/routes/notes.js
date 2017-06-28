var express = require('express');
var router = express.Router();

const config = require('config');
const mysql = require('mysql');


const connection = mysql.createConnection({
  host     : config.notes.database.host,
  user     : 'etudiant',
  password : 'Password1',
  database : 'NodeJS'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  
  connection.query('SELECT Personne.Nom, Personne.Prenom,Cours.Libelle,Note.Valeur FROM Cours INNER JOIN Note on Cours.Id=Note.CoursId INNER JOIN Eleve ON Note.EleveId = Eleve.Id INNER JOIN Personne ON Eleve.PersonneId = Personne.id', function (error, results, fields) {
    if (error) {
      console.log('ERROR');
      throw error;
    }
    //console.log(results[0].Nom);

    res.render('notes',{title: 'Gestion des élèves',lesNotes:results});
  });

});


module.exports = router;

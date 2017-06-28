var express = require('express');
var router = express.Router();

const mysql = require('mysql');
let connection = mysql.createConnection({

  host : '192.168.222.86',
  user : 'etudiant',
  password : 'Password1',
  database : 'NodeJS'
})

/* GET users listing. */
router.get('/', function(req, res, next) {
 
  connection.connect();
 
  connection.query('SELECT Nom, Prenom FROM Eleve INNER JOIN Personne ON Eleve.PersonneId = Personne.id', function (error, results, fields) {
  if (error) {
    console.log("Erreur affichage des élèves");
    throw error;
  }
    //console.log('Test: ', results[0].Nom);
    res.render('users',{title:'Liste des eleves', eleves : results});

  });
 
  connection.end();
  
});

module.exports = router;

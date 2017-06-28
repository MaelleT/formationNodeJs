var express = require('express');
var router = express.Router();
const mysql = require('mysql');
var connection = mysql.createConnection({
  host :'192.168.222.86',
  port : '3306',
  user :'etudiant',
  password : 'Password1',
  database : 'NodeJS'
});

router.get('/', function(req, res, next){
  res.render('home')
})

/* GET users listing. */
router.get('/liste', function(req, res, next) {
  connection.query('SELECT Personne.nom, Personne.prenom, Note.valeur, Cours.libelle FROM Eleve JOIN Personne ON Personne.Id = Eleve.PersonneId LEFT JOIN Note ON Eleve.Id = Note.CoursId LEFT JOIN Cours ON Cours.Id = Note.CoursId', function (error, results, fields){
    if (error) throw error;
    console.log('resultat :', results[0].solution);
    res.render('users',{Reponse:results})
    console.log(results)
  })
});




module.exports = router;

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



/* GET users listing. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM Personne', function (error, results, fields){
    if (error) throw error;
    console.log('resultat :', results[0].solution);
    res.render('users',{Reponse:results})
    console.log(results)
  })
});

router.get('/ajout', function(req, res, next) {
  res.render('ajout');
});

let nom
let prenom

router.post('/ajout', function(req, res, next) {
  nom=req.body.nom;
  prenom=req.body.prenom;
  res.render('ajout', {nomRetour:nom,prenomRetour:prenom})
  let query = "INSERT INTO Personne (Nom, Prenom) VALUES ('"+nom+"','"+prenom+"')";
  console.log(query);
  connection.query(query, function (error, results, fields){
    if (error) throw error;
  })
})



module.exports = router;

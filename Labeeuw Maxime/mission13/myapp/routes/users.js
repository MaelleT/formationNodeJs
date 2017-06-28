process.env.NODE_CONFIG_DIR = __dirname + "../config";
var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const config = require('config');

var connection = mysql.createConnection({
  host : config.notes.database.host,
  user : config.notes.database.user,
  password : config.notes.database.password,
  database : config.notes.database.name,
  port : config.notes.database.port
});

router.get('/', function(req, res, next){
  res.render('home')
})

/* GET users listing. */
router.get('/liste', function(req, res, next) {
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

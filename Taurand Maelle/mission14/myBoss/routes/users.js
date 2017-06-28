var express = require('express');
var router = express.Router();

const mysql = require('mysql');


const connection = mysql.createConnection({
  host     : '192.168.222.86',
  user     : 'etudiant',
  password : 'Password1',
  database : 'NodeJS'
});

/* GET users listing. */
router.get('/', function(req, res, next) {
 
  connection.query('SELECT Nom, Prenom FROM Eleve INNER JOIN Personne ON Eleve.PersonneId = Personne.id', function (error, results, fields) {
    if (error) {
      console.log('ERROR');
      throw error;
    }
    //console.log(results[0].Nom);

    res.render('users',{title: 'Gestion des élèves',lesEleves:results});
  });
 

});

router.get('/add', function(req, res, next) {
  res.render('usersAdd',{title: 'Eleve Add'});
});

router.post('/add', function(req, res, next) {
  let nom = req.body.Nom;
  let prenom = req.body.Prenom;
  //console.log(nom);


  //code à nettoyer : il faut séparer les callback et les sortir en fonction
  let sql = "INSERT INTO Personne (Nom, Prenom) VALUES ('"+nom+"','"+prenom+"')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");

    let sql = "INSERT INTO Eleve (PersonneId) VALUES ("+result.insertId+")";
    connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    });
    res.redirect('/users');
  });
  

});

//router.get()

module.exports = router;

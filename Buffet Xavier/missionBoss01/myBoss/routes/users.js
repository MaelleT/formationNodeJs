var express = require('express');
var router = express.Router();

const mysql = require('mysql');

const  connection = mysql.createConnection({
  host     : '192.168.222.86',
  port     : '3306',
  user     : 'etudiant',
  password : 'Password1',
  database : 'NodeJS'
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM Personne', function (error, results, fields) {
    if (error) throw error;
    res.render('users',{allusers: results});
  });

router.get('/add', function(req, res, next) {
    res.render('add');
  }); 

router.post('/add', function(req, res, next) {
  let str='INSERT INTO Personne (Nom,Prenom) VALUES("'+req.body.newName+'","'+req.body.newFirstName+'")';
  connection.query(str, function (error, results, fields) {
    if (error) throw error;
    res.render('add',{message: str});
  });

  });

});

module.exports = router;

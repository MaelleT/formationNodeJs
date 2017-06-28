process.env.NODE_CONFIG_DIR = __dirname + "./config";

var express = require('express');
var router = express.Router();

const config = require('config');

const mysql = require('mysql');

const  connection = mysql.createConnection({
  host     : config.notes.database.host,
  user     : config.notes.database.user,
  password : config.notes.database.password,
  database : config.notes.database.dbName
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM Personne', function (error, results, fields) {
    if (error) throw error;
    res.render('users',{allusers: results});
      });
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

module.exports = router;

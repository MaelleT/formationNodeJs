var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : '192.168.222.86',
  user     : 'etudiant',
  password : 'Password1',
  database : 'NodeJS'
});

/* GET users listing. */
router.get('/', function(req, res, next) {

  let personnes=undefined;
  
  connection.connect();
 
  connection.query('select * from Personne inner join Eleve on Personne.Id = Eleve.PersonneId', (error, results, fields) => {
    if (error) throw error;
    personnes = results;
  });
 
  connection.end();

  res.render('users', { personnes: personnes });
});

module.exports = router;

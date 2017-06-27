var express = require('express');
var router = express.Router();
const mysql = require('mysql');
let connection = mysql.createConnection({
  host : '192.168.222.86',
  port : '3306',
  user : 'etudiant',
  password : 'Password1',
  database : 'NodeJS'
})



router.get('/', function(req, res, next) {
  connection.connect();
  connection.query('SELECT * FROM Personne', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
  let resultat = results
  res.render('users',{resultat : results});
});
  connection.end();
});

module.exports = router;

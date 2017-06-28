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

  connection.connect();
  
  connection.query('SELECT Nom FROM Personne', function (error, results, fields) {
    if (error) throw error;
    res.render('users',{results:results});
    //console.log('The solution is: ', results[0].Nom);
  });
  
  connection.end();

  

});

module.exports = router;

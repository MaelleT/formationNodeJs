const express = require('express');
const router = express.Router();
const mysql = require('mysql');

let con = mysql.createConnection({
  host: "192.168.222.86",
  user: "etudiant",
  password: "Password1",
  database: "NodeJS"
});

/* GET users listing. */
router.get('/', function(req, res, next) {

  let requete = "select nom, prenom from Personne ; "
  con.connect(function(err) {
    if (err) throw err;
    con.query(requete, function (err, result) {
    
    if (err) throw err;
    res.render('users',{resultat : result});
  });

}); 
  
});

module.exports = router;

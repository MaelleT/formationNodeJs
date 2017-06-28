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

/* GET notes listing. */
router.get('/', function(req, res, next) {
    let str = "select p.Nom, p.Prenom, n.Valeur, c.Libelle from Eleve e, Personne p, Note n, Cours c ";
    str=str +"where e.id=p.PersonneId and e.id=n.CoursId and c.Id=n.CoursId";
    connection.query(str, function (error, results, fields) {
    if (error) throw error;
         res.render('notes',{allnotes: results});
      });
  });

  module.exports = router;
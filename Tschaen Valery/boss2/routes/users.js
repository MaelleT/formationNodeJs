const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const bodyParser = require('body-parser');

const config=require('config');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

let connection = mysql.createConnection({
  host     : config.notes.database.host,
  user     : config.notes.database.user,
  password : config.notes.database.password,
  database : config.notes.database.base
});
 
 console.log(config.notes.database.host,config.notes.database.user,config.notes.database.password,config.notes.database.base);

/* GET users listing. */
router.get('/', function(req, res, next) {

  connection.query('select * from Personne inner join Eleve on Personne.Id = Eleve.PersonneId', function (error, results, fields) {
    if (error) throw error;
    res.render('users',{title: 'Liste des élèves', eleves: results});
  });
  
});

router.get('/add', (req,res,next) => {
  res.render('addUser',{title: 'Ajouter un élève'});
});

router.post('/add', (req,res,next) => {
  let nom = req.body.nom;
  let prenom = req.body.prenom;

  console.log(nom + ' ' + prenom);
  let query = `INSERT INTO Personne(Nom,Prenom) VALUES ('${nom}','${prenom}')`;
  console.log(query);
  connection.query(query, function (error, results, fields) {
    if (error) throw error;
    let query = `select id from Personne where Nom='${nom}' and Prenom='${prenom}'`;
    console.log(query);
    connection.query(query, function (error, results, fields) {
      if (error) throw error;
      let id = results[0].id;
      let query = `INSERT INTO Eleve(PersonneId) VALUES (${id})`;
      console.log(query);
      connection.query(query, function (error, results, fields) {
        if (error) throw error;
        res.redirect('/users');
      });
    });
  });
});

module.exports = router;

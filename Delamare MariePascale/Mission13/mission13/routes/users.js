const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const config = require('config');

let con = mysql.createConnection({
  host: config.notes.database.host,
  user: config.notes.database.user,
  password: config.notes.database.password,
  database: config.notes.database.name
});

/* GET users listing. */
router.get('/', function(req, res, next) {

  let requete = "select nom, prenom from Personne ; "
  con.connect(function(err) {
    if (err) throw err;
    con.query(requete, function (err, result) {
    
    if (err) throw err;
    res.render('users',{lesEleves : result});
  });

}); 
  
});

router.get('/add', function(req, res, next){
    res.render('add');
});

router.post('/add', function(req, res, next){

    let requete = "insert into Personne (Nom, Prenom) VALUES ( '" + req.body.Nom + "','" + req.body.Prenom + "');" ;
    con.connect(function(err) {
      if (err) throw err;
      
      con.query(requete, function (err, result) {
    
        if (err) throw err;
        
        res.render('add', {Nom : req.body.Nom , Prenom : req.body.Prenom});

      }) ;

  });

});

module.exports = router;

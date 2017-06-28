const express = require('express');
const app = express() ;

const Eleve = require('./eleve.js');
const Professeur = require('./professeur.js') ;
const Matiere = require('./matiere.js') ;

let eleve1 = new Eleve('Gunt', 'Charles') ;
let eleve2 = new Eleve('Olivier', 'Truc') ;

let matiere1 = new Matiere('Histoire') ;
let matiere2 = new Matiere('Geographie') ;

eleve1.ajouterNote (16, 'Histoire');
eleve1.ajouterNote (14, 'Geographie');
eleve1.ajouterNote (12, 'Histoire');
eleve1.ajouterNote (11, 'Geographie');

eleve2.ajouterNote (6, 'Histoire');
eleve2.ajouterNote (5, 'Geographie');
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/eleveCreation', function (req, res) {
 
  let chaine = '<form action="/eleveCreation" method = "post">';
  chaine += 'Nom:<br>' ;
  chaine += '<input type="text" name="Nom" value="Mickey"><br>';
  chaine += 'Prenom:<br>';
  chaine += '<input type="text" name="Prenom" value="Mouse"><br><br>';
  chaine += '<input type="submit" value="Submit">';
  chaine += '</form>';
  res.send (chaine) ;
  })
 
app.post('/eleveCreation', function (req, res) {

let eleve3 = new Eleve(req.body.nom, req.body.prenom)
console.log(eleve3)


})



app.listen(3000,'127.0.0.1')
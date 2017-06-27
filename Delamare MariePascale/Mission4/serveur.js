let express = require('express');
let app = express() ;

let Eleve = require('./eleve.js');
let Professeur = require('./professeur.js') ;
let Matiere = require('./matiere.js') ;

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

app.get('/eleve', function (req, res) {
  let moyenne = eleve1.moyenneGenerale().toString()
  let chaine = '<h1> Nom : ' + eleve1.nom +  ' Prenom : ' + eleve1.prenom  + '<H1>' + '<h1> Moyenne Generale : ' + moyenne +'<H1>'
  res.send (chaine) ;
  })
 

app.listen(3000,'127.0.0.1')
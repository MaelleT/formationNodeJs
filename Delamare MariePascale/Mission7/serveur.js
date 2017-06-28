const express = require('express');
const app = express() ;
const bodyParser = require('body-parser');

const Eleve = require('./eleve.js');
const Professeur = require('./professeur.js') ;
const Matiere = require('./matiere.js') ;

app.set('views', "./views") ;
app.set('view engine', 'pug') ;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

let mesEleves = [] ;
let mesMatieres = [] ;

let eleve1 = new Eleve('Gunt', 'Charles') ;
let eleve2 = new Eleve('Olivier', 'Truc') ;

eleve1.ajouterNote (16, 'Histoire');
eleve1.ajouterNote (14, 'Geographie');
eleve1.ajouterNote (12, 'Histoire');
eleve1.ajouterNote (11, 'Geographie');
eleve2.ajouterNote (6, 'Histoire');
eleve2.ajouterNote (5, 'Geographie');

mesEleves.push(eleve1) ;
mesEleves.push(eleve2) ;

let matiere1 = new Matiere('Histoire') ;
let matiere2 = new Matiere('Geographie') ;

mesMatieres.push(matiere1) ;
mesMatieres.push(matiere2) ;
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/eleve', function (req, res) {
 
    res.render('eleve') ;
  })
 
app.post('/eleve', function (req, res) {
  
  let eleve3 = new Eleve(req.body.Nom, req.body.Prenom)
  mesEleves.push(eleve3) ;
  res.render('eleve', {eleve : eleve3})

})

app.get('/eleveListe', function (req, res) {
 
    res.render('eleveListe') ;
  })
  
app.listen(3000,'127.0.0.1')
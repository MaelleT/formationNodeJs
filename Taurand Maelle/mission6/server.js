//modules node
const express = require('express');
//const redirect = require('express-redirect');

const bodyParser = require('body-parser');


//modules "métiers"
const Eleve = require("./eleve.js");

//initialisation de l'application
const app = express();
//redirect(app);

app.set('views','./views');
app.set('view engine','pug');

//ajouter pour le post
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


let mesEleves = [];

let unEleve = new Eleve(id=1, nom='Tschaen',prenom='Valery');
mesEleves.push(unEleve);

let unEleve2 = new Eleve(id=2, nom='Taurand',prenom='Maelle');
mesEleves.push(unEleve2);


app.get('/', (req, res) => {
  res.render('index', {message : "Bienvenue dans l'application de gestion des élèves" });
  
});

//affiche tous les élèves
app.get('/eleves',(req,res) =>  {
      let responseText = 'Voici la liste des élèves </br>';
      mesEleves.forEach(
      (unEleve) => {responseText += `Elève ${unEleve.prenom} ${unEleve.nom}  </br>`;}
	  	);
        res.send(responseText);

  
});

//affiche un élève
app.get('/eleve/:id', (req, res) => {
  let id=req.params.id;
  let trouve = false;

  if (id < mesEleves.length+1){
    let responseText = `Hello Eleve ${mesEleves[id-1].nom}`;
    res.send(responseText);

  }	
  else 
  {
    res.status(404).send("Sorry ! User doesn't exist");
  }
});

//
app.get('/eleve',(req,res) => {

  res.render('eleve');

 
});

//Ajoute un eleve
app.post('/eleve', (req, res) => {
 
  let eleve = new Eleve(id=mesEleves.length+1, nom=req.body.nom, prenom= req.body.prenom);
  mesEleves.push(eleve);
  
  res.render('eleve',{eleve : eleve });

  
  
       
});


//APP

try {
    app.listen(8081,'127.0.0.1',() => {
        console.log("Serveur OK");
    }); //démarrage du serveur sur le port 8081
} catch (err) {
	console.error(' Erreur de démarrage du serveur!', err);
}

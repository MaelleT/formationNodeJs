//modules node
const express = require('express');

//modules "métiers"
const Eleve = require("./eleve.js");

//initialisation de l'application
const app = express();

let mesEleves = [];

let unEleve = new Eleve(id=1, nom='Tschaen',prenom='Valery');
mesEleves.push(unEleve);

let unEleve2 = new Eleve(id=2, nom='Taurand',prenom='Maelle');
mesEleves.push(unEleve2);


app.get('/', (req, res) => {
  let responseText = 'Bienvenue dans l\'application de gestion des élèves';
  res.send(responseText);
});

app.get('/eleves',(req,res) =>  {
      let responseText = 'Voici la liste des élèves </br>';
      mesEleves.forEach(
      (unEleve) => {responseText += `Elève ${unEleve.prenom} ${unEleve.nom}  </br>`;}
	  	);
        res.send(responseText);

  
});


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


try {
    app.listen(8081,'127.0.0.1',() => {
        console.log("Serveur OK");
    }); //démarrage du serveur sur le port 8081
} catch (err) {
	console.error(' Erreur de démarrage du serveur!', err);
}

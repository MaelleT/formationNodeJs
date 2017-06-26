const express = require('express');
const app = express();

let mesEleves = [];

const Eleve = require("./eleve.js");
let unEleve = new Eleve(id= mesEleves.length +1, nom='toto',prenom='titi');
mesEleves.push(unEleve);

let unEleve2 = new Eleve(id= mesEleves.length +1, nom='valery',prenom='titi');
mesEleves.push(unEleve2);


app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/eleves',(req,res) =>  {
mesEleves.forEach(
      (unEleve) => {res.send(`Hello Eleve ${mesEleves[id-1].nom}`);}
	  	);
});


app.get('/eleve/:id', (req, res) => {
  let id=req.params.id;
  let trouve = false;

  if (id < mesEleves.length){
    res.send(`Hello Eleve ${mesEleves[id-1].nom}`);
	  
  }	
  else 
  {
    res.status(404).send("Sorry! User doesn't exist");
  }
});


try {
    app.listen(8081,'127.0.0.1',() => {
        console.log("Serveur OK");
    }); //démarrage du serveur sur le port 8081
} catch (err) {
	console.error(' Erreur de démarrage du serveur!', err);
}

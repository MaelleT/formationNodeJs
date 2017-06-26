const express = require('express');
const app = express();

const Eleve = require("./eleve.js");
var unEleve = new Eleve(nom='toto',prenom='titi');

app.get('/', (req, res) => {
  res.send('Hello World');
});



app.get('/eleve/:id', (req, res) => {
  let id=req.params.id;
  if (id == 1) {
    res.send('Hello Eleve ' + unEleve.nom);
  }
});

try {
    app.listen(8081,'127.0.0.1',() => {
        console.log("Serveur OK");
    }); //démarrage du serveur sur le port 8081
} catch (err) {
	console.error(' Erreur de démarrage du serveur!', err);
}

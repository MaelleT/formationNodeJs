const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res.send('Hello World');
});
 
app.get('/eleve', (req, res) => {
  res.send('Hello Eleve');
});

try {
    app.listen(8081,'127.0.0.1',() => {
        console.log("Serveur OK");
    }); //démarrage du serveur sur le port 8081
} catch (err) {
	console.error(' Erreur de démarrage du serveur!', err);
}

const express=require("express");
const app = express();

app.listen(8081,()=> {
        console.log('il y a eu une requête !!!!');
})

const http = require('http');


const server = http.createServer(function(req,res){

    console.log('il y a eu une requête !!!!');
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
    res.write('<h1>Hello !! comment ça va ?</h1>');
 	res.end();
}
)


try {
    server.listen(8081,'127.0.0.1',function (){

    }); //démarrage du serveur sur le port 8081
} catch (err) {
	console.error(' Erreur de démarrage du serveur!', err);
}
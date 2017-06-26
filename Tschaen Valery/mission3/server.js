const http = require('http');
const express = require('express');

const app=express();

app.listen(80,"127.0.0.1",() => {
    console.log("Serveur OK");
});

app.get("/", (req,res) => {
    console.log("Nouvelle requete");
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.statusCode = 200;
    res.write("<H1>Coucou me voilà</H1><BR><hr>");
    res.end();
});

/*
const server = http.createServer(function (req,res) {
    console.log("Nouvelle requete");
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.statusCode = 200;
    res.write("<H1>Coucou me voilà</H1><BR><hr>");
    res.end();

});

server.listen(80,"127.0.0.1",function () {
    console.log("Listen server");
});
*/
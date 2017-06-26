const http = require('http');

const server = http.createServer(function(req,res){

    console.log('il y a eu une requête !!!!');
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
    res.write('<h1>Hello !! comment ça va ?</h1>');
 	res.end();
}
)

server.listen(8081,'127.0.0.1',function (){

}
);

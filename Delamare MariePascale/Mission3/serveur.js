const http = require('http');

/*let callback = function(req,res){
  res.end('<h1>hello world <h1>');
};*/

const server = http.createServer(function(req,res) {
  res.end ('<h1> Hello you <h1>') ;
  
});     

server.listen (port=3000, hostname='127.0.0.1', function(){



});

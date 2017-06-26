const http = require('http');

const server = http.createServer(function(req, res) {
    res.end("test");
});
server.listen(3000,'127.0.0.1',function(){
});


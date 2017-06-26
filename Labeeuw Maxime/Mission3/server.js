const http = require('http');
const server = http.createServer(function (req, res) {
    res.end('coucou');
});

server.listen(1337,'127.0.0.1',function() {
});


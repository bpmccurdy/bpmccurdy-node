var http, server;
http = require('http');
server = function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end("<html><head><title>bpmccurdy-node</title></head><body><h1>bpmccurdy-node</h1></body></html>");
}; 
http.createServer(server).listen(process.env.PORT || 8080);

var router = require('./routes.js');
//creating a web server
var http = require('http');
http.createServer(function (request, response){
    router.home(request, response);
    router.user(request, response);
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');


var http = require('http'); //module http
var url = require("url");

var server = http.createServer(function(req,res){ // un callback
    var page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<p>Hello to <b>you</b> !!</p>");
    res.end("");

  }
);
console.log("Serveur crée ...");
server.listen(6464);

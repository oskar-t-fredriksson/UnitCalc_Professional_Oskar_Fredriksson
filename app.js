var http = require('http');
var url = require('url');
var fs = require('fs');


//Mainly taken from w3schools, both http and json

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    var path = q.pathname;

    if (path == "/save") {
        fs.writeFile('mynewfile1.txt', '{"X" : "' + q.query.X + '", ' + '"Y" : "' + q.query.Y + '", ' + '"Z" : "' + q.query.Z + '", ' + '"T" : "' + q.query.T + '"}', function (err) {
            if (err) throw err;
            console.log(q);            
        });
    }
    if (path == "/load") {
        fs.readFile('mynewfile1.txt', 'utf8', function (err, data) {
            res.write(data);
            res.end();
        });
    }
    else {
        fs.readFile("MyCalc_Oskar_Fredriksson.html", function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end("404 Not Found");
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    }

    
}).listen(8080); 

const http = require('http');
const path = require("path");
const anymatch = require('anymatch');
const v8 = require("v8");
const hostname = '127.0.0.1';
const port = 8888;
const matchers = [ 'path/to/file.js', 'path/anyjs/**/*.js', /foo.js$/, string => string.includes('bar') && string.length > 10 ] ;
const server = http.createServer((request, response) => {
 response.statusCode = 200;
 response.setHeader('Content-Type', 'text/plain');
 
 response.end('Hello, from node.js serwer !\n');

});
server.listen(port, hostname, () => {
    console.log(anymatch(matchers, 'path/to/file.js'));
    console.log(anymatch(matchers, 'path/anyjs/baz.js'));
    console.log(anymatch(matchers, 'path/to/foo.js'));
    console.log(anymatch(matchers, 'path/to/bar.js'));
    console.log(anymatch(matchers, 'bar.js'));
    console.log("Anymatch is a Javascript module to match a string against a regular expression, glob, string or function that takies the string as an argument and returns a truthy or falsy value.");
    console.log(`Server running at http://${hostname}:${port}/`);
});
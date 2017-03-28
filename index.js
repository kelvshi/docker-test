const http = require('http');

// Create an HTTP server
var srv = http.createServer( (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Quanzhou');
});

srv.listen(1337, '127.0.0.1', () => {
	console.log("http://localhost:1337");
});
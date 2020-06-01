var http = require('http');
http.createServer(function (req, res) {
    //res.writeHead(200, { 'Set-Cookie': "value=1500" });
    res.write('Your user agent is ' + req.headers['user-agent'] + "\n");
    res.end('Your cookie ' + req.headers.cookie);
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
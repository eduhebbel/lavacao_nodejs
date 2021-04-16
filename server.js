const http = require('http');

const hostname= 'ec2-100-24-236-218.compute-1.amazonaws.com';

const port= 80;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader ('Content-Type', 'text/html' );
    res.end('<h1> SERVIDOR OUVINDO </h1>');
});


server.listen(port, hostname, () => {
    console.log('SERVIDOR RODANDO--> http:// ${hostname} , ${port}');
});

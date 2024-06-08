const { createServer } = require('node:http');

const hostname = '0.0.0.0';
const port = 8098;


const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');

});
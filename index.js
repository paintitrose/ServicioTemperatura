const { createServer } = require('node:http');

const hostname = '0.0.0.0';
const port = 8098;


const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Alumnos UPN:\n1. Dayner Osores\n2.Diego del Piero Tinco\n3.Axel Solis Delgado\n4.Chris Vega');
});

server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');

});
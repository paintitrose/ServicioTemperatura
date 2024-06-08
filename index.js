const { createServer } = require('node:http');

const hostname = '0.0.0.0';
const port = 8098;


const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Alumnos UPN: Dayner Osores, Diego del Piero Tinco, Axel Solis Delgado y Chris Vega');
});

server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');

});
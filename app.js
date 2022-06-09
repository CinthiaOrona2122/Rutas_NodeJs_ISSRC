const express = require('express'); //inicializa una app web.
const miServidor = express();
const port = 3000;

miServidor.get('/', (req, res) => {
    res.send('Hola mundo');
});

miServidor.listen(port, () => {});
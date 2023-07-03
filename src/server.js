const express = require("express");
const path = require("path");
const HOST = "localhost"
const PORT = 3000;
const server = express();

server.use('/public', express.static(path.join(__dirname, "public")));

server.get('', (req, res) =>{
    res.send("Radios de Apostoles,Paginas Web y Frecuencias");
});
server.get('/Estilo', (req, res) => {
    res.send("<h1>Pagina web: VisionHoy.com Frecuencia:90.3</h1>");
});
server.get('/Elemental', (req, res) => {
    res.send("<h1>Pagina web: Elemental.com Frecuencia 93.3</h1>");
});
server.get('/Lider', (req, res) => {
    res.send("<h1>Pagina Web: RadioLider90.6.com Frecuencia:90.6</h1>");
});

server.get('*', (req, res) => {
    res.status(404).send({
        "error": "404",
        "descripcion": "No se encuentra la ruta o recurso solicitado."
    });
})

server.listen(PORT, HOST, () => console.log(`El servidor se esta ejecutando en http://${HOST}:${PORT}`));
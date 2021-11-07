const http = require('http');
const express = require('express');
const server = express();



// configurar caminhos da aplicação
server.get("/index", (req, res) => {
    res.sendFile(__dirname + "/src/public/html/index.html")
})




server.listen(8081, function(){console.log('Servidor Rodando!');});

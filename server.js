const http = require('http');
const express = require('express');
const server = express();
const morgan = require('morgan')

server.use(express.static("public"))


  
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgan('dev'))





// configurar caminhos da aplicação
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/layout/index.html")
})
server.get("/trail-content-1", (req, res) => {
    res.sendFile(__dirname + "/views/layout/trail-content-1.html")
})
server.get("/home-trail", (req, res) => {
    res.sendFile(__dirname + "/views/layout/home-trail.html")
})
server.use(require('./src/routes'))





// Configurando o servidor
const PORT = 8081
server.listen(PORT,() => {
    console.log('Servidor rodando!')
})
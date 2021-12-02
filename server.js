const http = require('http');
const express = require('express');
const server = express();
const morgan = require('morgan')
const uuid = require('uuid').v4
const multer = require('multer');

server.use(express.static("public"))


  
// Código da parte de uploads de imagem

server.use(express.json());
server.use(express.urlencoded({ extended: true }));


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
      const { originalname } = file;
      // or 
      // uuid, or fieldname
      cb(null, `${uuid()}-${originalname}`);
  },
  // Definindo o tamnho dos arquivos, só será aceito até 1MB
  limits:{
    fileSize: 2*1024*1024
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
        'image/jpeg',
        'image/pjpeg',
        'image/png'
    ];
    if(allowedMimes.includes(file.mimetype)) {
        cb(null, true)
    } else{
        cb(new Error('Arquivo inválido'))
    }
  },
})
const upload = multer({ storage }); // or simply { dest: 'uploads/' }





server.post('/upload', upload.array('avatar'),(req, res) => {
  return res.json({ status: 'OK', uploaded: req.files.length  + ' imagens' });
});







// configurar caminhos da aplicação
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/layout/index.html")
})
server.get("/home-trail", (req, res) => {
    res.sendFile(__dirname + "/views/layout/home-trail.html")
})
server.get("/trail-content-1", (req, res) => {
    res.sendFile(__dirname + "/views/layout/trail-content-1.html")
})
server.get("/trail-content-2", (req, res) => {
    res.sendFile(__dirname + "/views/layout/trail-content-2.html")
})
server.get("/trail-content-3", (req, res) => {
    res.sendFile(__dirname + "/views/layout/trail-content-3.html")
})
server.get("/trail-content-4", (req, res) => {
    res.sendFile(__dirname + "/views/layout/trail-content-4.html")
})
server.get("/trail-content-5", (req, res) => {
    res.sendFile(__dirname + "/views/layout/trail-content-5.html")
})
server.get("/trail-content-6", (req, res) => {
    res.sendFile(__dirname + "/views/layout/trail-content-6.html")
})
server.get("/trail-content-7", (req, res) => {
    res.sendFile(__dirname + "/views/layout/trail-content-7.html")
})
server.get("/trail-content-8", (req, res) => {
    res.sendFile(__dirname + "/views/layout/trail-content-8.html")
})
server.get("/trail-content-9", (req, res) => {
    res.sendFile(__dirname + "/views/layout/trail-content-9.html")
})
server.get("/trail-content-10", (req, res) => {
    res.sendFile(__dirname + "/views/layout/trail-content-10.html")
})
server.get("/trail-content-11", (req, res) => {
    res.sendFile(__dirname + "/views/layout/trail-content-11.html")
})
server.get("/trail-content-12", (req, res) => {
    res.sendFile(__dirname + "/views/layout/trail-content-12.html")
})
server.get("/trail-content-13", (req, res) => {
    res.sendFile(__dirname + "/views/layout/trail-content-13.html")
})
server.get("/trail-content-14", (req, res) => {
    res.sendFile(__dirname + "/views/layout/trail-content-14.html")
})
server.get("/trail-content-15", (req, res) => {
    res.sendFile(__dirname + "/views/layout/trail-content-15.html")
})
server.get("/trail-content-16", (req, res) => {
    res.sendFile(__dirname + "/views/layout/trail-content-16.html")
})

server.get("/upload-file", (req, res) => {
    res.sendFile(__dirname + "/views/layout/upload.html")
})





// Configurando o servidor
const PORT = 8081
server.listen(PORT,() => {
    console.log('Servidor rodando!')
})
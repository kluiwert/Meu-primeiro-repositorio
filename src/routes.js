const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer')


routes.get('/upload-file', (req, res) => {
    res.sendFile(__dirname + "/views/layout/upload.html")
});
routes.post('/upload', multer(multerConfig).array('avatar'),(req, res) => {
    return res.json({ status: 'OK', uploaded: req.files.length  + ' imagens' });
    console.log('enviado com sucesso');

});


module.exports = routes;
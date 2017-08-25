var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/hola-mundo', function(req, res){
res.status(200).send('hola mundo desde una ruta ');
});

server.listen(6677, function(){
    console.log('Servidor está funcionando en http://localhost:6677');
});
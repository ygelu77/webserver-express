const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//express hbs
hbs.registerPartials(__dirname + '/views/partials', function(err) {});
app.set('view engine', 'hbs');


app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'Christian'
    });
});
app.get('/about', function(req, res) {

    res.render('about');
});

// app.get('/data', function(req, res) {
//     // res.send('Hola Mundo');


//     res.send('Hola Mundo data');
// });

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);

});
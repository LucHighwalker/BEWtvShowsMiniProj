const express = require('express');
const app = express();

const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const database = require('./database/database');

urlEncodedParser = bodyParser.urlencoded({ extended: false });

// App initialization
app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    helpers: {
        //helper functions
    }
}));
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.listen(4200, () => {
    console.log('tv shows is listening on localhost:4200');
});

app.get('/shows/episodes', (req, res) => {
    //hardcoded id
    database.getEpisodes("adsf768sd7f8s7dfa6g8").then((episodes) => {
        res.render('episodes', { episodes: episodes });
    }).catch((error) => {
        console.error(error);
    })
});

app.get('/shows/cast', (req, res) => {
    //hardcoded id
    database.getCast("adsf768sd7f8s7dfa6g8").then((cast) => {
        res.render('cast', { cast: cast });
    }).catch((error) => {
        console.error(error);
    })
});
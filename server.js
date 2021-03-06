const express = require('express');
const app = express();

const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const showRouter = require('./routers/shows');

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


app.get('/genres/:genre', (req, res) => {
    var genre = req.params.genre;
    console.log('the fuck');
    console.log(genre);
    database.getShowsByGenre(genre).then((shows) => {
        res.render('genres', {
            shows: shows
        });
    }).catch((error) => {
        console.error(error);
    });
});

app.use('/shows/:showID', (req, res, next) => {
    req.showID = req.params.showID;
    next();
}, showRouter);

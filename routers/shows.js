const shows = require('express').Router();

const database = require('../database/database');

shows.get('/cast', (req, res) => {
    var showID = req.showID;
    database.getCast(showID).then((cast) => {
        res.render('cast', { cast: cast });
    }).catch((error) => {
        console.error(error);
    });
});

shows.get('/episodes', (req, res) => {
    var showID = req.showID;
    database.getEpisodes(showID).then((episodes) => {
        res.render('episodes', { episodes: episodes });
    }).catch((error) => {
        console.error(error);
    });
});

module.exports = shows;
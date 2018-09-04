//hardcoded response
const shows = [
    {
        _id: "adsf768sd7f8s7dfa6g8",
        title: "Rick and Morty",
        description: "Really dumb and funny",
        rating: "tv-ma",
        episodes: [
            "pilot",
            "ricklantis"
        ],
        cast: {
            Targaeryan: 'Dani',
            Snow: 'Joe',
            Stark: 'Ansel',
            Lanister: 'Kendra'
        }
    }
]

function getShow(showID) {
    var show = null;
    for (var i = 0; i < shows.length; i++) {
        if (shows[i]._id == showID) {
            show = shows[i];
            break;
        }
    }
    return show;
}

function getCast(showID) {
    return new Promise((resolve, reject) => {
        var show = getShow(showID);
        var cast = show.cast ? show.cast : null;

        console.log(cast);

        if (cast) {
            resolve(cast);
        } else {
            reject('no cast');
        }
    });
}

function getEpisodes(showID) {
    return new Promise((resolve, reject) => {
        var show = getShow(showID);
        var episodes = show.episodes ? show.episodes : null;

        if (episodes.length > 0) {
            resolve(episodes);
        } else {
            reject('no episodes');
        }
    });
}

module.exports = {
    getCast: getCast,
    getEpisodes: getEpisodes
}
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
        ]
    }
]

function getEpisodes(showID) {
    return new Promise((resolve, reject) => {
        episodes = [];
        for (var i = 0; i < shows.length; i++) {
            if (shows[i]._id == showID) {
                episodes = shows[i].episodes;
                break;
            }
        }
        if (episodes.length > 0) {
            resolve(episodes);
        } else {
            reject('no episodes');
        }
    });
}

module.exports = {
    getEpisodes: getEpisodes
}
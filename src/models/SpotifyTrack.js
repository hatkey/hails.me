// src/models/SpotifyTrack.js
var m = require("mithril");

var SpotifyTrack = {
    track: null,
    playlist_id: "0wHHB2mHD7D6eJN7JeJe97",
    getRandomTrack: function() {
        let self = this;
        return m.request({
            method: "GET",
            url: "https://api.hails.me/wrapper/spotify/playlist/" 
                + self.playlist_id + "/randomTrack"
        })
        .then(function(result) {
            self.track = result;
        })
        .catch(function(error) {
            self.track = null;
        });
    },
};

module.exports = SpotifyTrack;

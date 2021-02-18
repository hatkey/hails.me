// src/models/Albums.js
var m = require("mithril");

const IMG_PATH = "resources/images/albums/";

var Albums = {
    albums: [],
    getAlbums: function() {
        let self = this;
        if (self.albums.length === 0) {
            return m.request({
                method: "GET",
                url: "api/albums"
            })
            .then(function(result) {
                self.albums = result;
            })
            .catch(function(error) { });
        }
    }
};

module.exports = Albums;

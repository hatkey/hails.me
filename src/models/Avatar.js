// src/models/Avatar.js
var m = require("mithril");

var Avatar = {
    src: null,
    images: [],
    getAvatars: function() {
        let self = this;
        if (self.images.length === 0) {
            return m.request({
                method: "GET",
                url: "api/avatars"
            })
            .then(function(result) {
                self.images = result;
            })
            .catch(function(error) { });
        } else return Promise.resolve();
    },
    getRandom: function() {
        let n = Math.floor(Math.random() * this.images.length);
        this.src = this.images[n];
    }
};

module.exports = Avatar;

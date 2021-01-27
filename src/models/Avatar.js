// src/models/Avatar.js
var m = require("mithril");

var Avatar = {
    src: null,
    images: [
        "hayley_1_circle.png",
        "hayley_2_circle.png",
        "hayley_3_circle.png",
        "hayley_4_circle.png"
    ],
    path: "resources/images/avatars/",
    getRandom: function() {
        let n = Math.floor(Math.random() * this.images.length);
        this.src = this.path + this.images[n];
    }
};

module.exports = Avatar;

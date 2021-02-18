// src/views/Avatar.js
var m = require("mithril");
var Avatar = require("../models/Avatar");

module.exports = {
    oninit: function() {
        if (!Avatar.src) {
            Avatar.getAvatars()
            .then(function() {
                Avatar.getRandom();
            });
        }
    },
    view: () => (
        <section id="avatar">
            <img alt="avatar" src={Avatar.src} />
        </section>
    )
};

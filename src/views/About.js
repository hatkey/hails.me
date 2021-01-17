// src/views/About.js
var m = require("mithril");
const About = require("../models/About");
var Avatar = require("./Avatar");

module.exports = {
    view: () => (
        <header>
            <Avatar />

            {About.content}

            <br />
        </header>
    )
};

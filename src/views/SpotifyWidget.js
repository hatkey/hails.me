// src/views/SpotifyWidget.js
var m = require("mithril");
var SpotifyTrack = require("../models/SpotifyTrack");

module.exports = {
    oninit: () => {SpotifyTrack.getRandomTrack()},
    view: function() {
        if (SpotifyTrack.track != null) return (
            <section id="spotify">
                🎧 i've been listening to...
                <br />

                <a href={SpotifyTrack.track["trackLink"]}>
                    <strong>{SpotifyTrack.track["trackName"]}</strong>
                </a>
                &#8203; by &#8203;
                <a href={SpotifyTrack.track["artistLink"]}>
                    <em>{SpotifyTrack.track["artistName"]}</em>
                </a>
            </section>
        );
        else return null;
    }
};
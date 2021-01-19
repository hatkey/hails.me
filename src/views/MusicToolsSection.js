// src/views/MusicToolsSection.js
var m = require("mithril");
var GridList = require("./GridList");
var MusicTools = require("../models/MusicTools");

module.exports = {
    view: () => (
        <section id="tools">
            <h2>tools</h2>

            <GridList>
                {MusicTools.tools.map(tool => (<li>{tool}</li>))}
            </GridList>

            <p>
                <small>
                    i use <strong>lots</strong> of different tools
                    &#8203;for music production -- more than I would care to
                    &#8203;list here. but these are the main ones!<br />
                    still, if you wanna know more, you can always &#8203;
                    <a href="mailto:hayley@hails.me">email me</a> :)
                </small>
            </p>
        </section>
    )
};

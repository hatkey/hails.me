// src/views/AffirmationWidget.js
var m = require("mithril");
var Affirmation = require("../models/Affirmation");

module.exports = {
    oninit: () => {Affirmation.getAffirmation()},
    view: function() {
        return (
            <section id="affirmation">
                {Affirmation.text}
            </section>
        );
    }
};

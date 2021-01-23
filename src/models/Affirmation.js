// src/models/Affirmation.js
var m = require("mithril");

var Affirmation = {
    text: null,
    getAffirmation: function() {
        let self = this;
        if (!self.text) {
            return m.request({
                method: "GET",
                url: "https://api.hails.me/wrapper/affirmations/"
            })
            .then(function(result) {
                self.text = result.affirmation;
            })
            .catch(function(error) {
                self.text = "Everything will be ok :)";
            });
        }
    },
};

module.exports = Affirmation;

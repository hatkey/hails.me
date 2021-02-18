// src/models/MusicTools.js
var m = require("mithril");

var MusicTools = {
    tools: [],
    getTools: function() {
        let self = this;
        if (self.tools.length === 0) {
            return m.request({
                method: "GET",
                url: "api/music-tools"
            })
            .then(function(result) {
                self.tools = result;
            })
            .catch(function(error) { });
        }
    }
};

module.exports = MusicTools;

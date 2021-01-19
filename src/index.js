// index.js
var m = require("mithril");
var Home = require("./views/Home");
var Code = require("./views/Code");
var Music = require("./views/Music");

var root = document.body;

// Set up routing
m.route(root, "/home", {
    "/home":    Home,
    "/code":    Code,
    "/music":   Music
});

// index.js
var m = require("mithril");

var root = document.body;

var Home = {};
var Code = {};
var Music = {};

// Set up routing
m.route(root, "/home", {
    "/home":    Home,
    "/code":    Code,
    "/music":   Music
});

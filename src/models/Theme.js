// src/models/Theme.js
var m = require("mithril");

var Theme = {
    theme: null,
    loadThemeFromLocalStorage: function() {
        let current_theme = localStorage.getItem("theme");

        if (current_theme) {
            Theme.theme = current_theme;
        } else {
            localStorage.setItem("theme", "dark");
            Theme.theme = "dark";
        }
    },
    toggleTheme: function() {
        if (Theme.theme === "dark") Theme.theme = "light";
        else Theme.theme = "dark";

        localStorage.setItem("theme", Theme.theme);
    }
};

module.exports = Theme;

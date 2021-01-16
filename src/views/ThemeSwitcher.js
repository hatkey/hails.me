// src/views/ThemeSwitcher.js
var m = require("mithril");
var Theme = require("../models/Theme");

module.exports = {
    oninit: function() {
        Theme.loadThemeFromLocalStorage();
        let html = document.querySelector("html");
        html.classList.add(Theme.theme);
    },
    toggleTheme: function() {
        let html = document.querySelector("html");
        html.classList.remove(Theme.theme);
        Theme.toggleTheme();
        html.classList.add(Theme.theme);
    },
    oncreate: function(vnode) {
        let btn = vnode.dom.children[0];
        btn.addEventListener("click", this.toggleTheme);
    },
    view: () => (
        <section id="theme-switcher">
            <button type="button"></button>
        </section>
    )
};

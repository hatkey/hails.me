// src/views/Layout.js
var m = require("mithril");
var Twemoji = require("../util/Twemoji");
var Theme = require("../models/Theme");
var Extras = require("./Extras");
var Footer = require("./Footer");

module.exports = {
    oncreate: Twemoji.parse,
    oninit: function() {
        Theme.loadThemeFromLocalStorage();
        let html = document.querySelector("html");
        html.classList.add(Theme.theme);
    },
    view: (vnode) => (
        <div id="page">
            <main>
                <Extras />
                {vnode.children}
            </main>

            <Footer showBackToTopBtn={vnode.attrs.showBackToTopBtn} />
        </div>
    )
};

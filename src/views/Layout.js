// src/views/Layout.js
var m = require("mithril");
var Twemoji = require("../util/Twemoji");
var Extras = require("./Extras");
var Footer = require("./Footer");

module.exports = {
    oncreate: Twemoji.parse,
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

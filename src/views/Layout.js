// src/views/Layout.js
var m = require("mithril");
var Extras = require("./Extras");
var Footer = require("./Footer");

module.exports = {
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

// src/views/Home.js
var m = require("mithril");
var Extras = require("./Extras");
var About = require("./About");
var Footer = require("./Footer");

module.exports = {
    view: () => (
        <div id="page">
            <main>
                <Extras />
                <About />
            </main>
            <Footer showBackToTopBtn={false} />
        </div>
    )
};

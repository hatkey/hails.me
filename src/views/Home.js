// src/views/Home.js
var m = require("mithril");
var Layout = require("./Layout");
var About = require("./About");

module.exports = {
    view: () => (
        <Layout>
            <About />
        </Layout>
    )
};

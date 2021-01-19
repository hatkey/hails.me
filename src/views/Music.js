// src/views/Music.js
var m = require("mithril");
var Layout = require("./Layout");
var PageHeader = require("./PageHeader");
var AlbumsSection = require("./AlbumsSection");
var MusicToolsSection = require("./MusicToolsSection");
var ContactSection = require("./ContactSection");

module.exports = {
    view: () => (
        <Layout showBackToTopBtn>
            <PageHeader music />

            <AlbumsSection />

            <MusicToolsSection />

            <ContactSection />
        </Layout>
    )
};

// src/views/Code.js
var m = require("mithril");
var Layout = require("./Layout");
var PageHeader = require("./PageHeader");
var SkillsSection = require("./SkillsSection");
var ProjectsSection = require("./ProjectsSection");
var ContactSection = require("./ContactSection");

module.exports = {
    view: () => (
        <Layout showBackToTopBtn>
            <PageHeader code />

            <SkillsSection />

            <ProjectsSection />

            <ContactSection />
        </Layout>
    )
};

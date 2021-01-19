// src/views/Extras.js
var m = require("mithril");
var SocialLinksList = require("./SocialLinksList");
var ThemeSwitcher = require("./ThemeSwitcher");

module.exports = {
    view: () => (
        <aside id="extras">
            <SocialLinksList />

            <ThemeSwitcher />
        </aside>
    )
};

// src/views/Extras.js
var m = require("mithril");
var SocialLinks = require("./SocialLinks");
var ThemeSwitcher = require("./ThemeSwitcher");

module.exports = {
    view: () => (
        <aside id="extras">
            <SocialLinks />

            <ThemeSwitcher />
        </aside>
    )
};

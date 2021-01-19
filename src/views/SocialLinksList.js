// src/views/SocialLinksList.js
var m = require("mithril");
var SocialLinks = require("../models/SocialLinks");

module.exports = {
    view: function () {
        return (
            <section>
                <ul id="social-links">
                    {SocialLinks.links.map(link => (
                        <li>
                            <a class={`social ${link.name}`} href={link.url}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        );
    }
};

// src/views/SocialLinks.js
var m = require("mithril");
var SocialLinks = require("../models/SocialLinks");

module.exports = {
    generateList: function() {
        let ul = (<ul id="social-links"></ul>);

        for (const key in SocialLinks.links) {
            let li = (
                <li>
                    <a class={`social ${key}`} href={SocialLinks.links[key]}>
                        {key}
                    </a>
                </li>
            );
            ul.children.push(li);
        }

        return ul;
    },
    view: function () {
        return (
            <section>
                {this.generateList()}
            </section>
        );
    }
};

// src/views/Project.js
var m = require("mithril");
const BadgeList = require("./BadgeList");

module.exports = {
    view: (vnode) => (
        <section class="project">
            <h4>{vnode.attrs.name}</h4>

            <BadgeList dark>
                {
                    vnode.attrs.tags ? 
                    vnode.attrs.tags.map(tag => (<li class="small">{tag}</li>)) : null
                }
            </BadgeList>

            <p>{vnode.attrs.description}</p>

            <p>
                {
                    vnode.attrs.links ? 
                    vnode.attrs.links.map(
                        link => (
                            <a href={link.url}>{link.name}</a>
                        )
                    ) : null
                }
            </p>

        </section>
    )
};

// src/views/Album.js
var m = require("mithril");

module.exports = {
    view: function(vnode) {
        let tags = [];
        for (let i = 0; i < vnode.attrs.tags.length; i++) {
            if (i == vnode.attrs.tags.length - 1)
                tags.push(vnode.attrs.tags[i]);
            else
                tags.push(vnode.attrs.tags[i] + " | ");
        }

        return (
            <li>
                <img alt={vnode.attrs.name} src={vnode.attrs.imgSrc} />
                <strong>{vnode.attrs.name}</strong>
                <span>
                    {tags}
                </span>
                <a href={vnode.attrs.link}>listen</a>
            </li>
        );
    }
};

// src/views/AlbumList.js
var m = require("mithril");

module.exports = {
    view: (vnode) => (
        <ul class="album-list">
            {vnode.children}
        </ul>
    )
};

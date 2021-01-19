// src/views/GridList.js
var m = require("mithril");

module.exports = {
    view: (vnode) => (
        <ul class="grid-list">
            {vnode.children}
        </ul>
    )
};

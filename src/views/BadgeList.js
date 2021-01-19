// src/views/BadgeList.js
var m = require("mithril");

module.exports = {
    view: (vnode) => (
        <ul class={
            vnode.attrs.dark  ? "badge-list-dark"  :
            vnode.attrs.light ? "badge-list-light" :
            "badge-list"
        }>
            {vnode.children}
        </ul>
    )
};

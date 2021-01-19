// src/views/PageHeader.js
var m = require("mithril");

module.exports = {
    view: (vnode) => (
        <header>
            <h1><a href="#!/home">hayley labrie</a></h1>
            <h2>
                &#8193; 
                {
                    vnode.attrs.code  ? "code ⌨️" :
                    vnode.attrs.music ? "music 🎶" : ""
                }
            </h2>
        </header>
    )
};

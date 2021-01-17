// src/views/Footer.js
var m = require("mithril");
// var Affirmation = require("./Affirmation");
// var OnRepeat = require("./OnRepeat");

module.exports = {
    scrollToTop: () => { window.scrollTo(0, 0) },
    oncreate: function(vnode) {
        if (vnode.attrs.showBackToTopBtn) {
            let btn = document.querySelector("#back-to-top button");
            btn.addEventListener("click", this.scrollToTop);
        }
    },
    view: (vnode) => (
        <footer>
            <section>
                hails.me v1.0<br />
                created by hayley 🏳️‍⚧️ 💕
            </section>

            <section>
                icons via <a href="https://icons.getbootstrap.com/">bootstrap</a>.
                <br />
                emoji via <a href="https://twemoji.twitter.com">twemoji</a>.
            </section>

            {/* <OnRepeat /> */}

            {/* <Affirmation /> */}

            {vnode.attrs.showBackToTopBtn
                ? (
                    <section id="back-to-top">
                        <button type="button">
                            back to top ⬆️
                        </button>
                    </section>
                ) : null
            }
        </footer>
    )
};

// src/views/About.js
var m = require("mithril");
// const About = require("../models/About");
var Avatar = require("./Avatar");

module.exports = {
    view: () => (
        <header>
            <Avatar />

            <section id="about">
                <h6>hiii 👋, i'm</h6>
                <h1>hayley labrie <sup class="badge">she/her</sup></h1>
                <h2>i write
                    &#8203;<a href="#!/code">code</a> <a href="#!/code">⌨️</a>
                    &#8203; and <a href="#!/music">music</a> <a href="#!/music">🎶</a>.</h2>
                <br />
                <p>
                    more specifically, i'm a UGA alum with a B.S. in Computer Science
                    &#8203;and a background in web development. i'm also a music composer
                    &#8203;and producer.
                </p>
                <p>
                    i'm sometimes known as <span>hails</span>, <span>hatkey</span>,
                    &#8203;<span>hayleybee 🐝</span>, or <span>hayley jackson</span>,
                    &#8203;depending on who you are.
                </p>
                <p>
                    i love cats 🐱, 
                    &#8203;Dark Souls 🧙‍♀️, 
                    &#8203;the Boston Celtics ☘️, 
                    &#8203;and modal interchange 🌈.
                </p>
                <p>
                    if you'd like to reach out, the best way to get in touch is to
                    &#8203;<a href="mailto:hayley@hails.me">email me</a>.
                </p>
            </section>

            <br />
        </header>
    )
};

// twemoji.js

var Twemoji = {
    parse: function() {
        console.group("Twemoji:");
        console.log("Parsing emoji...");

        if (twemoji) {
            twemoji.parse(document.body, {
                callback: function(icon, options, variant) {
                    switch ( icon ) {
                        case 'a9':      // © copyright
                        case 'ae':      // ® registered trademark
                        case '2122':    // ™ trademark
                            return false;
                    }
                    return ''.concat(options.base, options.size, '/', icon, options.ext);
                }
            });
            console.log("%cdone!", "color: darkgreen; background: palegreen");
        } else {
            console.error("Emoji parsing failed.");
        }

        console.groupEnd();
    }
};

module.exports = Twemoji;

// twemoji.js

var Twemoji = {
    parse: function() {
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
        }
    }
};

module.exports = Twemoji;

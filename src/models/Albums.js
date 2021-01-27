// src/models/Albums.js

const IMG_PATH = "resources/images/albums/";

var Albums = {
    albums: [
        {
            name: "cv1no",
            imgSrc: IMG_PATH + "cv1no.png",
            tags: ["album", "electronic", "ambient"],
            link: "https://soundcloud.com/hatkeyy/sets/cv1no"
        },
        {
            name: "cv2gv",
            imgSrc: IMG_PATH + "cv2gv.png",
            tags: ["album", "electronic", "ambient"],
            link: "https://soundcloud.com/hatkeyy/sets/cv2gv"
        },
        {
            name: "loosies 2016",
            imgSrc: IMG_PATH + "loosies_2016.png",
            tags: ["compilation", "electronic", "ambient"],
            link: "https://soundcloud.com/hatkeyy/sets/loosies-2016"
        }
    ]
};

module.exports = Albums;

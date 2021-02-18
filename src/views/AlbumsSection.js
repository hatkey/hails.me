// src/views/Music.js
var m = require("mithril");
var Album = require("./Album");
var AlbumList = require("./AlbumList");
var Albums = require("../models/Albums");

module.exports = {
    oninit: () => {Albums.getAlbums()},
    view: () => (
        <section id="albums">
            <h2>albums & releases</h2>

            <AlbumList>
                {Albums.albums.map(album => (
                    <Album 
                        name={album.name}
                        imgSrc={album.imgSrc}
                        tags={album.tags}
                        link={album.link}
                    />
                ))}
            </AlbumList>
        </section>
    )
};

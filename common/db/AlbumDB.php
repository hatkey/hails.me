<?php

namespace me\hails\common\db;

require_once __DIR__ . "/DB.php";
require_once __DIR__ . "/../models/Album.php";
use me\hails\common\models\Album;

class AlbumDB extends DB {

    public function getAllAlbums() : array {
        $query = "SELECT * FROM album;";
        $result = $this->conn->query($query);
        
        if (!$result || $result->num_rows < 1) return [];

        $albums = [];
        while($row = $result->fetch_assoc()) {
            $tags = self::getTags($row["name"]);
            $albums[] = new Album(
                $row["name"],
                $row["imgSrc"],
                $row["link"],
                $tags
            );
        }

        return $albums;
    } // getAllAlbums

    public function getAlbumByName(string $name) : ?Album {
        $query = "SELECT * FROM album WHERE name='$name';";
        $result = $this->conn->query($query);
        
        if (!$result || $result->num_rows < 1) return NULL;

        $data = $result->fetch_assoc();
        $tags = self::getTags($name);
        return new Album(
            $data["name"],
            $data["imgSrc"],
            $data["link"],
            $tags
        );
    } // getAlbumByName

    private function getTags(string $album) : array {
        $tags = [];

        $query = "SELECT * FROM albumTag WHERE album='$album';";
        $result = $this->conn->query($query);
        
        if ($result && $result->num_rows >= 1) {
            while ($row = $result->fetch_assoc()) {
                $tags[] = $row["name"];
            }
        }

        return $tags;
    } // getTags

}

?>

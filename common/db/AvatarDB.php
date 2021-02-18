<?php

namespace me\hails\common\db;

require_once __DIR__ . "/DB.php";
require_once __DIR__ . "/../models/Avatar.php";
use me\hails\common\models\Avatar;

class AvatarDB extends DB {

    public function getAllAvatars() : array {
        $query = "SELECT * FROM avatar;";
        $result = $this->conn->query($query);
        
        if (!$result || $result->num_rows < 1) return [];

        $avatars = [];
        while($row = $result->fetch_assoc()) {
            $avatars[] = new Avatar($row["src"]);
        }

        return $avatars;
    } // getAllAvatars

}

?>

<?php

namespace me\hails\common\db;

require_once __DIR__ . "/DB.php";
require_once __DIR__ . "/../models/MusicTool.php";
use me\hails\common\models\MusicTool;

class MusicToolDB extends DB {

    public function getAllMusicTools() : array {
        $query = "SELECT * FROM musicTool;";
        $result = $this->conn->query($query);
        
        if (!$result || $result->num_rows < 1) return [];

        $tools = [];
        while($row = $result->fetch_assoc()) {
            $tools[] = new MusicTool($row["name"]);
        }

        return $tools;
    } // getAllMusicTools

}

?>

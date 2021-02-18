<?php

namespace me\hails\common\db;

require_once __DIR__ . "/DB.php";
require_once __DIR__ . "/../models/Skill.php";
use me\hails\common\models\Skill;

class SkillDB extends DB {

    public function getAllSkills() : array {
        $query = "SELECT * FROM skill ORDER BY proficiency ASC, name DESC;";
        $result = $this->conn->query($query);
        
        if (!$result || $result->num_rows < 1) return [];

        $skills = [];
        while($row = $result->fetch_assoc()) {
            $skills[] = new Skill(
                $row["name"],
                Skill::Proficiency[$row["proficiency"]]
            );
        }

        return $skills;
    } // getAllSkills

}

?>

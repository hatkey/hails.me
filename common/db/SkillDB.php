<?php

namespace me\hails\common\db;

require_once __DIR__ . "/DB.php";
require_once __DIR__ . "/../models/Skill.php";
use me\hails\common\models\Skill;

class SkillDB extends DB {

    public function getAllSkills() : array {
        $query = 
            "SELECT * FROM skill
            ORDER BY
                proficiency ASC,
                CASE name WHEN 'Java' THEN 0 ELSE 1 END,
                CASE name WHEN 'HTML' THEN 0 ELSE 1 END,
                CASE name WHEN '(S)CSS' THEN 0 ELSE 1 END,
                CASE name WHEN 'C/C++' THEN 0 ELSE 1 END,
                CASE name WHEN 'Mithril' THEN 0 ELSE 1 END,
                name DESC;";
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

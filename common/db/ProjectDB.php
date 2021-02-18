<?php

namespace me\hails\common\db;

require_once "DB.php";
require_once "../models/Project.php";
use me\hails\common\models\Project;
require_once "../models/ProjectLink.php";
use me\hails\common\models\ProjectLink;

class ProjectDB extends DB {

    public function getAllProjects() : array {
        $query = "SELECT * FROM project ORDER BY CASE name WHEN 'hails.me' THEN 0 ELSE 1 END, name;";
        $result = $this->conn->query($query);
        
        if (!$result || $result->num_rows < 1) return [];

        $projects = [];
        while($row = $result->fetch_assoc()) {
            $tags = self::getTags($row["name"]);
            $links = self::getLinks($row["name"]);
            $projects[] = new Project(
                $row["name"],
                $row["description"],
                $tags,
                $links
            );
        }

        return $projects;
    } // getAllProjects

    private function getTags(string $projectName) : array {
        $tags = [];

        $query = "SELECT * FROM projectTag WHERE project='$projectName';";
        $result = $this->conn->query($query);
        
        if ($result && $result->num_rows >= 1) {
            while ($row = $result->fetch_assoc()) {
                $tags[] = $row["name"];
            }
        }

        return $tags;
    } // getTags

    private function getLinks(string $projectName) : array {
        $links = [];

        $query = "SELECT * FROM projectLink WHERE project='$projectName';";
        $result = $this->conn->query($query);
        
        if ($result && $result->num_rows >= 1) {
            while ($row = $result->fetch_assoc()) {
                $links[] = new ProjectLink($row["name"], $row["url"]);
            }
        }

        return $links;
    } // getLinks

}

?>

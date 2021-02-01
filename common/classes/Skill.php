<?php

namespace me\hails\common;

class Skill implements \JsonSerializable {

    const Proficiency = [
        "HIGH" => 1,
        "MEDIUM" => 2,
        "LOW" => 3
    ];

    private ?string $name = NULL;
    private int $proficiency = 1;

    public function __construct(?string $name, int $proficiency) {
        $this->setName($name);
        $this->setProficiency($proficiency);
    }

    public function getName() : ?string {
        return $this->name;
    }

    public function setName(?string $name) {
        $this->name = $name;
    }

    public function getProficiency() : ?string {
        $proficiency = array_search($this->proficiency, self::Proficiency);
        return $proficiency ? $proficiency : NULL;
    }

    public function setProficiency(int $proficiency) {
        if (in_array($proficiency, self::Proficiency)) {
            $this->proficiency = $proficiency;
        }
    }

    public function jsonSerialize () {
        return [
            "name"          => $this->getName(),
            "proficiency"   => $this->getProficiency()
        ];
    }

}

?>

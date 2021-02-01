<?php

namespace me\hails\common;

class MusicTool implements \JsonSerializable {

    private ?string $name = NULL;

    public function __construct(?string $name) {
        $this->setName($name);
    }

    public function getName() : ?string {
        return $this->name;
    }

    public function setName(?string $name) {
        $this->name = $name;
    }

    public function JsonSerialize() {
        return $this->getName();
    }

}

?>

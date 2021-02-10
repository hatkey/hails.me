<?php

namespace me\hails\common\models;

class ProjectLink implements \JsonSerializable {

    private ?string $name = NULL;
    private ?string $url = NULL;

    public function __construct(?string $name, ?string $url) {
        $this->setName($name);
        $this->setURL($url);
    }

    public function getName() : ?string {
        return $this->name;
    }

    public function setName(?string $name) {
        $this->name = $name;
    }

    public function getURL() : ?string {
        return $this->url;
    }

    public function setURL(?string $url) {
        $this->url = $url;
    }

    public function JsonSerialize() {
        return [
            "name" => $this->getName(),
            "url"  => $this->getURL()
        ];
    }

}

?>

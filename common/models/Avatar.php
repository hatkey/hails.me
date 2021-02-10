<?php

namespace me\hails\common\models;

class Avatar implements \JsonSerializable {

    private ?string $filename = NULL;

    public function __construct(?string $filename) {
        $this->setFilename($filename);
    }

    public function getFilename() : ?string {
        return $this->filename;
    }

    public function setFilename(?string $filename) {
        $this->filename = $filename;
    }

    public function JsonSerialize() {
        return $this->getFilename();
    }

}

?>

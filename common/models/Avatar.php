<?php

namespace me\hails\common\models;

class Avatar implements \JsonSerializable {

    private ?string $src = NULL;

    public function __construct(?string $src) {
        $this->setSrc($src);
    }

    public function getSrc() : ?string {
        return $this->src;
    }

    public function setSrc(?string $src) {
        $this->src = $src;
    }

    public function JsonSerialize() {
        return $this->getSrc();
    }

}

?>

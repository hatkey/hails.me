<?php

namespace me\hails\common\models;

class Album implements \JsonSerializable {

    private ?string $name = NULL;
    private ?string $imgSrc = NULL;
    private ?string $link = NULL;
    private array $tags = [];

    public function __construct(?string $name, ?string $imgSrc, ?string $link, array $tags) {
        $this->setName($name);
        $this->setImgSrc($imgSrc);
        $this->setLink($link);
        $this->setTags($tags);
    }

    public function getName() : ?string {
        return $this->name;
    }

    public function setName(?string $name) {
        $this->name = $name;
    }

    public function getImgSrc() : ?string {
        return $this->imgSrc;
    }

    public function setImgSrc(?string $imgSrc) {
        $this->imgSrc = $imgSrc;
    }

    public function getLink() : ?string {
        return $this->link;
    }
    
    public function setLink(?string $link) {
        $this->link = $link;
    }

    public function getTags() : array {
        return $this->tags;
    }
    
    public function setTags(array $tags) {
        // Ensure that all tags are strings
        foreach ($tags as $tag) {
            if (!is_string($tag)) return;
        }

        $this->tags = $tags;
    }

    public function jsonSerialize () {
        return [
            "name"      => $this->getName(),
            "imgSrc"    => $this->getImgSrc(),
            "link"      => $this->getLink(),
            "tags"      => $this->getTags()
        ];
    }

}

?>

<?php

namespace me\hails\common\models;

class Project implements \JsonSerializable {

    private ?string $name = NULL;
    private ?string $description = NULL;
    private array $tags = [];
    private array $links = [];

    public function __construct(?string $name, ?string $description, array $tags, array $links) {
        $this->setName($name);
        $this->setDescription($description);
        $this->setTags($tags);
        $this->setLinks($links);
    }

    public function getName() : ?string {
        return $this->name;
    }

    public function setName(?string $name) {
        $this->name = $name;
    }

    public function getDescription() : ?string {
        return $this->description;
    }

    public function setDescription(?string $description) {
        $this->description = $description;
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

    public function getLinks() : array {
        return $this->links;
    }
    
    public function setLinks(array $links) {
        // Ensure that all links are ProjectLink objects
        foreach ($links as $link) {
            if (!$link instanceof ProjectLink) return;
        }

        $this->links = $links;
    }

    public function JsonSerialize() {
        return [
            "name" => $this->getName(),
            "description" => $this->getDescription(),
            "tags" => $this->getTags(),
            "links" => $this->getLinks()
        ];
    }

}

?>

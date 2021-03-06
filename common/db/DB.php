<?php

namespace me\hails\common\db;

define("DB_CONFIG_PATH", $_SERVER["DOCUMENT_ROOT"] . "/../db_config");
require_once DB_CONFIG_PATH . "/db_connect.php";

abstract class DB {

    protected $conn = NULL;


    public function __construct() {
        $this->conn = connect();
    }

    public function __destruct() {
        if ($this->conn) $this->conn->close();
    }

    public function isConnected() {
        return $this->conn !== NULL;
    }

}

?>

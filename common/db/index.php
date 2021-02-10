<?php

ini_set("display_errors", true);
header("Content-Type: application/json");

require_once "AlbumDB.php";
use me\hails\common\db\AlbumDB;
require_once "../models/Album.php";
use me\hails\common\models\Album;

$adb = new AlbumDB();
$albums = $adb->getAllAlbums();
echo json_encode($albums);

?>

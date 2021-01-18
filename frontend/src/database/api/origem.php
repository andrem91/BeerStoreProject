<?php

require_once "../actions/db_connect.php";

$result = query("SELECT * FROM origem;");
$origens = [];

while ($row = mysqli_fetch_assoc($result)){
    $origens[] = $row;
}

header("Access-Control-Allow-Origin:*");

echo json_encode($origens);

<?php

require_once "../actions/db_connect.php";

$result = query("SELECT * FROM marca;");
$marcas = [];

while ($row = mysqli_fetch_assoc($result)){
    $marcas[] = $row;
}

header("Access-Control-Allow-Origin:*");

echo json_encode($marcas);

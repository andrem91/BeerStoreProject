<?php

require_once "../actions/db_connect.php";

$result = query("SELECT * FROM estilo;");
$estilos = [];

while ($row = mysqli_fetch_assoc($result)){
    $estilos[] = $row;
}

header("Access-Control-Allow-Origin:*");

echo json_encode($estilos);

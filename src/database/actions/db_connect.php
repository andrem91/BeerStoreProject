<?php

function query($sql) {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "beerstore";
    
    $connect = mysqli_connect($servername, $username, $password, $database);
    mysqli_set_charset($connect, 'utf8');
    $result = mysqli_query($connect, $sql);
    mysqli_close($connect);
    return $result;
}


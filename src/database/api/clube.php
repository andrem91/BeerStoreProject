<?php

header("Access-Control-Allow-Origin:*");

require_once "./conexao.php";

if($_SERVER['REQUEST_METHOD'] === 'GET'){

    $sql = "SELECT * FROM clube;";
    $resultado = query($sql);
    $clube = [];

    while($row = mysqli_fetch_assoc($resultado)){
        $clube[] = $row;
    }

    echo json_encode($clube); 

} else if($_SERVER['REQUEST_METHOD'] === 'POST'){
    
    $nome = $_POST['nome_cliente'];
    $endereco = $_POST['endereco'];
    $telefone = $_POST['telefone'];
    $produto = $_POST['nome_produto'];
    $valor = floatval($_POST['valor_unit']);
    $quantidade = intval($_POST['quantidade']);
    $valor_final = $valor * $quantidade;

    $sql = "INSERT INTO clube (nome_cliente, endereco, telefone, nome_produto, valor_unit, quantidade, valor_final)  
    VALUES ('$nome', '$endereco' ,'$telefone', '$produto', $valor, $quantidade, $valor_final);";
    nonquery($sql);
}


?>
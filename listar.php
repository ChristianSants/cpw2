<?php 

    include_once 'include/autoload.inc.php';
    $objProdutoDAO = new ProdutoDAO();

    $arrayProdutos = $objProdutoDAO->list();

    echo json_encode(($arrayProdutos));

?>
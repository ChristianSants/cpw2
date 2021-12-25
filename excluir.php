<?php 
    include_once 'include/autoload.inc.php';

    extract($_POST);
    $objProdutoDAO = new ProdutoDAO();
    echo $objProdutoDAO->delete($id);
?>
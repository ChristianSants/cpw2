<?php 
    include_once 'include/autoload.inc.php';

    extract($_POST);
    
    $objProdutoDAO = new ProdutoDAO();
    $objProduto = new Produto($id, $nome, $qnt, 'nada');
    $objProdutoDAO->setObjProduto($objProduto);

    echo $objProdutoDAO->update();
?>
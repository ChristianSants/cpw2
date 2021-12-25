<?php

declare(strict_types=1);

class Produto{

    private $id;
    private $nome;
    private $qnt;
    private $tipo;

    public function __construct($id, $nome, $qnt, $tipo){
        $this->id = $id;
        $this->nome = $nome;
        $this->qnt = $qnt;
        $this->tipo = $tipo;
    }

    //Getters
    public function getId(){
        return $this->id;
    }

    public function getNome(){
        return $this->nome;
    }

    public function getQnt(){
        return $this->qnt;
    }

    public function getTipo(){
        return $this->tipo;
    }

}
?>
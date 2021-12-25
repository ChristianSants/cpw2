<?php 

class ProdutoDAO extends Conexao{


    /**
     * @var Produto
     */
    private $objProduto;

    public function setObjProduto($obj){
        $this->objProduto = $obj;
    }

    public function insert(){
        $sql = "
            INSERT INTO produtos(id, nome, qnt, tipo) 
            VALUES(?, ?, ?, ?)
        ";
         
        $prepare = $this->conectaMySQL()->prepare($sql);   

        $prepare->bindValue(1, $this->objProduto->getId());
        $prepare->bindValue(2, $this->objProduto->getNome());
        $prepare->bindValue(3, $this->objProduto->getQnt());
        $prepare->bindValue(4, $this->objProduto->getTipo());
        
        try{
            return $prepare->execute();
        }catch(Exception $e){
            echo $e->getMessage();
            die();
        }
    }

    //Listar
    public function list(){
        $sql = "
            SELECT *
            FROM produtos
            ORDER BY id DESC
         ";

        $array = [];

        foreach($this->conectaMySQL()->query($sql) as $valor){
            // $objTipoRetorno = new Produto($valor['id'], $valor['nome'], $valor['qnt'], $valor['tipo']);
            array_push($array, $valor);
        }

        return $array;
    }

    public function delete($id){
        $sql = "
            DELETE 
            FROM produtos
            WHERE id = ?
        ";
         
        $prepare = $this->conectaMySQL()->prepare($sql);   

        $prepare->bindParam(1, $id);
        
        try{
            return $prepare->execute();
        }catch(Exception $e){
            echo $e->getMessage();
            die();
        }
    }

    /*
    public function findUsuarioByUser($user){
        $sql = "
            SELECT *
            FROM usuario
            WHERE user = ?
            ORDER BY id DESC
        ";

        $prepare = $this->conectaMySQL()->prepare($sql); 
        $prepare->bindParam(1, $user);
        $prepare->execute();

        $array = [];

        foreach($prepare->fetchAll() as $valor){

            $objTipoRetorno = new Usuario($valor['user'], $valor['pass'], $valor['cpf'], $valor['salt']);
            $objTipoRetorno->setId($valor['id']);

            array_push($array, $objTipoRetorno);
        }

        return $array;
    }
    */

}

?>
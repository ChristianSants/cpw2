<?php 

declare(strict_types=1);

class Conexao{
    protected function conectaMySQL(){
        $host = 'localhost'; 
        $dbname = 'cpw2_final';
        $user = 'root';
        $pass = '';

        try{
            $pdo = new PDO('mysql:host=' . $host . ';dbname=' . $dbname . ';charset=utf8', $user, $pass);
            $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            return $pdo;
        } catch(Exception $e){
            echo $e->getMessage();
            die();
        }
    }
    
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastrar</title>

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    
    <script src="script.js"></script>

</head>
<body>

    <?php include 'include/menu.php'; ?>

    <section>
        <div class="container mt-3">
            <form>
                <div class="col-8 offset-2" id="tudo">
                    <div class="row">
                        <div class="col-6 mb-3">
                            <label for="idEdt" class="form-label">ID</label>
                            <input type="text" class="form-control" id="idEdt" name="idEdt" >
                        </div>
                        <div class="col-6 mb-3">
                            <label for="qntEdt" class="form-label">Quantidade</label>
                            <input type="text" class="form-control" id="qntEdt" name="qntEdt" >
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6 mb-3">
                            <label for="nomeEdt" class="form-label">Nome</label>
                            <input type="text" class="form-control" id="nomeEdt" name="nomeEdt" >
                        </div>
                        <div class="col-6 mb-3">
                            <label for="tipoEdt" class="form-label">Tipo</label>
                            <select class="form-select"  name="tipoEdt" id="tipoEdt">
                                <option value="Roupa">Roupa</option>
                                <option value="Móveis">Móveis</option>
                                <option value="Eletrônico">Eletrônico</option>
                            </select>
                        </div>
                    </div>

                    <div class="btn btn-primary" onclick="cadastrar()" >Cadastrar</div>
                </div>                
            </form>
        </div>
        
    </section>
</body>
</html>
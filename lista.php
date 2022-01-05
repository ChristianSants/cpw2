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
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    
    <!-- Custom CSS -->
    <link href="assets/estilo.css" rel="stylesheet">

    <!-- JS -->
    <script src="assets/script.js"></script>

</head>
<body onload="listar()">

    <?php include 'include/menu.php'; ?>

    <section>
        <div class="container mt-3" id="tudo">
            <table class="table table-sm table-striped border">
                <thead>
                    <tr class="text-gray-900 bg-primary text-white">
                        <th class="align-middle text-center" style="width: 5%;">ID</th>
                        <th class="align-middle text-center">Nome</th>
                        <th class="align-middle text-center">Quantidade</th>
                        <th class="align-middle text-center">Tipo</th>
                        <th class="align-middle text-center">Opções</th>
                    </tr>
                </thead>
                <tbody class="corpo-tabela">

                </tbody>
            </table>
        </div>
        
    </section>
</body>
</html>
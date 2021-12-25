function cadastrar(){
    let id = document.getElementById('idEdt')
    let nome = document.getElementById('nomeEdt')
    let qnt = document.getElementById('qntEdt')
    let tipo = document.getElementById('tipoEdt')

    // Exemplo de requisição POST
    var ajax = new XMLHttpRequest();

    // Seta tipo de requisição: Post e a URL da API
    ajax.open("POST", "salvar.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    // Seta paramêtros da requisição e envia a requisição
    ajax.send("id="+id.value+"&nome="+nome.value+"&qnt="+qnt.value+"&tipo="+tipo.value);

    // Cria um evento para receber o retorno.
    ajax.onreadystatechange = function() {
    // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
        if (ajax.readyState == 4 && ajax.status == 200) {
            var data = ajax.responseText;
            // Retorno do Ajax
            let msgAntiga = document.getElementById('msg')
            

            let div = document.getElementById('tudo')
            if(msgAntiga != null){
                div.removeChild(msgAntiga)
            }

            let divMsg = document.createElement('div')
            divMsg.id = 'msg'
            
            if(data == 1){
                divMsg.className = "alert alert-success"
                divMsg.textContent = "Produto inserido com Sucesso!"
                div.appendChild(divMsg)
            }else{
                divMsg.className = "alert alert-danger mt-2"
                divMsg.textContent = "Algum erro ocorreu, tente novamente!"
                div.appendChild(divMsg)
            }
        }
    } 

}

function listar(){
    let tbody = document.getElementsByClassName('corpo-tabela')[0]
    tbody.innerHTML = ""

    // Exemplo de requisição POST
    var ajax = new XMLHttpRequest();

    // Seta tipo de requisição: Post e a URL da API
    ajax.open("POST", "listar.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    // Seta paramêtros da requisição e envia a requisição
    ajax.send();
    // Cria um evento para receber o retorno.
    ajax.onreadystatechange = function() {
    // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
        if (ajax.readyState == 4 && ajax.status == 200) {
            var data = ajax.responseText;
            // Retorno do Ajax
            conteudo = JSON.parse(data)
            for(i in conteudo){
                //td e tr
                let tr = document.createElement('tr')
                let tdId = document.createElement('td')
                let tdQnt = document.createElement('td')
                let tdNome = document.createElement('td')
                let tdTipo = document.createElement('td')
                let tdOpcao = document.createElement('td')

                tr.setAttribute('id', conteudo[i].id);

                tdId.className = 'align-middle text-center'
                tdQnt.className = 'align-middle text-center'
                tdNome.className = 'align-middle text-center'
                tdTipo.className = 'align-middle text-center'
                tdOpcao.className = 'align-middle text-center'

                tdId.textContent = conteudo[i].id
                tdQnt.textContent = conteudo[i].qnt
                tdNome.textContent = conteudo[i].nome
                tdTipo.textContent = conteudo[i].tipo

                // i
                let tagI = document.createElement('i')
                tagI.className = 'fa fa-trash icone mx-1'                
                
                //inserindo
                tbody.appendChild(tr)
                tr.appendChild(tdId)
                tr.appendChild(tdQnt)
                tr.appendChild(tdNome)
                tr.appendChild(tdTipo)
                tr.appendChild(tdOpcao)

                tdOpcao.appendChild(tagI)

                //interações
                tagI.addEventListener('click', function() {
                    let trNew = this.parentNode.parentNode
                    let idNew = trNew.getAttribute('id')
                    excluir(idNew) 
                })
                
            }

        }
    } 

}

function excluir(idNew){
    // Exemplo de requisição POST
    var ajax = new XMLHttpRequest();

    // Seta tipo de requisição: Post e a URL da API
    ajax.open("POST", "excluir.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    // Seta paramêtros da requisição e envia a requisição
    ajax.send("id="+idNew);

    // Cria um evento para receber o retorno.
    ajax.onreadystatechange = function() {
    // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
        if (ajax.readyState == 4 && ajax.status == 200) {
            var data = ajax.responseText;
            // Retorno do Ajax
            let msgAntiga = document.getElementById('msg')

            let div = document.getElementById('tudo')
            if(msgAntiga != null){
                div.removeChild(msgAntiga)
            }

            let divMsg = document.createElement('div')
            divMsg.id = 'msg'
            
            if(data == 1){
                listar()
                divMsg.className = "alert alert-success"
                divMsg.textContent = "Produto excluido com Sucesso!"
                div.appendChild(divMsg)
                
            }else{
                divMsg.className = "alert alert-danger mt-2"
                divMsg.textContent = "Algum erro ocorreu, tente novamente!"
                div.appendChild(divMsg)
            }

        }
    } 
}
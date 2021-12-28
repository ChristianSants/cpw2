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
                divMsg.className = "alert alert-success mt-2"
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
                let tdNome = document.createElement('td')
                let tdQnt = document.createElement('td')
                let tdTipo = document.createElement('td')
                let tdOpcao = document.createElement('td')

                tr.setAttribute('id', conteudo[i].id);

                tdId.className = 'align-middle text-center'
                tdQnt.className = 'align-middle text-center'
                tdNome.className = 'align-middle text-center'
                tdTipo.className = 'align-middle text-center'
                tdOpcao.className = 'align-middle text-center'

                tdId.textContent = conteudo[i].id
                tdNome.textContent = conteudo[i].nome
                tdQnt.textContent = conteudo[i].qnt
                tdTipo.textContent = conteudo[i].tipo

                // i
                let tagExcluir = document.createElement('i')
                tagExcluir.className = 'fa fa-trash icone mx-1'  
                
                let tagEditar = document.createElement('i')
                tagEditar.className = 'fa fa-edit icone mx-1'
                
                //inserindo
                tbody.appendChild(tr)
                tr.appendChild(tdId)
                tr.appendChild(tdNome)
                tr.appendChild(tdQnt)
                tr.appendChild(tdTipo)
                tr.appendChild(tdOpcao)

                tdOpcao.appendChild(tagEditar)
                tdOpcao.appendChild(tagExcluir)

                //interações
                tagEditar.addEventListener('click', function(){
                    let trThis = this.parentNode.parentNode
                    let valorNome = trThis.childNodes[1].textContent
                    let valorQnt = trThis.childNodes[2].textContent
                    let valorTipo = trThis.childNodes[3].textContent

                    editar(trThis, valorQnt, valorNome, valorTipo)
                })
                
                tagExcluir.addEventListener('click', function(){
                    let trThis = this.parentNode.parentNode
                    let idTr = trThis.getAttribute('id')
                    excluir(idTr) 
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
                divMsg.className = "alert alert-success mt-2"
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

function editar(tr, qnt, nome, tipo){

    // tr.childNodes[4].removeChild(tr.childNodes[4].childNodes[0])
    tr.childNodes[4].innerHTML = '<i class="fa fa-save salvar" onclick="atualizar(this)"></i>'

    // tr.appendChild()

    tr.childNodes[1].innerHTML = '<input value="'+nome+'" class="form-control  text-center" ></input>'     
    tr.childNodes[2].innerHTML = '<input value="'+qnt+'" class="form-control  text-center" ></input>' 
    // tr.childNodes[3].innerHTML = '<select class="form-select"  name="tipoEdt" id="tipoEdt">' +
    //                                 '<option value="Roupa" '+ (tipo == 'Roupa' ? 'selected' : '' )+' >Roupa</option>' + 
    //                                 '<option value="Móveis" '+ tipo == 'Móveis' ? 'selected' : '' +' >Móveis</option>' +
    //                                 '<option value="Eletrônico" '+ tipo == 'Eletrônico' ? 'selected' : '' +' >Eletrônico</option>' +
    //                             '</select>' ;



}

function atualizar(componente){
    let tr = componente.parentNode.parentNode
    let id = tr.childNodes[0].childNodes[0].textContent
    let nome = tr.childNodes[1].childNodes[0].value
    let qnt = tr.childNodes[2].childNodes[0].value
    // let tipo = tr.childNodes[3].childNodes[0].value
    // console.log(id)
    tr.childNodes[1].innerHTML = ''
    tr.childNodes[2].innerHTML = ''
    // tr.childNodes[3].innerHTML = ''
    tr.childNodes[4].innerHTML = ''

    tr.childNodes[1].textContent = qnt
    tr.childNodes[2].textContent = nome
    // tr.childNodes[3].textContent = tipo


    // Exemplo de requisição POST
    var ajax = new XMLHttpRequest();

    // Seta tipo de requisição: Post e a URL da API
    ajax.open("POST", "atualizar.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    // Seta paramêtros da requisição e envia a requisição
    ajax.send("id="+id+"&nome="+nome+"&qnt="+qnt);

    // Cria um evento para receber o retorno.
    ajax.onreadystatechange = function() {
    // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
        if (ajax.readyState == 4 && ajax.status == 200) {
            var data = ajax.responseText;
            console.log(data)
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
                divMsg.className = "alert alert-success mt-2"
                divMsg.textContent = "Produto excluido com Sucesso!"
                div.appendChild(divMsg)

                // trazendo os icones antigos
                let tagExcluir = document.createElement('i')
                tagExcluir.className = 'fa fa-trash icone mx-1'  
                let tagEditar = document.createElement('i')
                tagEditar.className = 'fa fa-edit icone mx-1'
                tr.childNodes[4].appendChild(tagEditar)
                tr.childNodes[4].appendChild(tagExcluir)

                //interações
                tagEditar.addEventListener('click', function(){
                    let trThis = this.parentNode.parentNode
                    let valorId = trThis.childNodes[0].textContent
                    let valorNome = trThis.childNodes[1].textContent
                    let valorQnt = trThis.childNodes[2].textContent
                    let valorTipo = trThis.childNodes[3].textContent

                    editar(trThis, valorId, valorQnt, valorNome, valorTipo)
                })
                tagExcluir.addEventListener('click', function(){
                    let trThis = this.parentNode.parentNode
                    let idTr = trThis.getAttribute('id')
                    excluir(idTr) 
                })
                
            }else{
                divMsg.className = "alert alert-danger mt-2"
                divMsg.textContent = "Algum erro ocorreu, tente novamente!"
                div.appendChild(divMsg)
            }

        }
    } 


}
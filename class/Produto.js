export class Produto{
    #id
    #nome
    #qnt
    #tipo
    
    constructor(id, nome, qnt, tipo){
        this.#id = id
        this.#nome = nome
        this.#qnt = qnt
        this.#tipo = tipo
    }

    setId(id){
        this.#id = id
    }

    getId(){
        return this.#id
    }

    setNome(nome){
        this.#nome = nome
    }

    getNome(){
        return this.#nome
    }

    setQnt(qnt){
        this.#qnt = qnt
    }

    getQnt(){
        return this.#qnt
    }

    setQnt(tipo){
        this.#tipo = tipo
    }

    getQnt(){
        return this.#tipo
    }

    toString(){
        return "ID: "+ this.#id +" | NOME: "+ this.#nome
    }
}

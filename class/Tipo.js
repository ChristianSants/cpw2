export class Tipo{
    #id
    #nome
    #obs
    
    constructor(id, nome, obs){
        this.#id = id
        this.#nome = nome
        this.#obs = obs
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

    setObs(obs){
        this.#obs = obs
    }

    getObs(){
        return this.#obs
    }


    toString(){
        return "ID: "+ this.#id +" | NOME: "+ this.#nome
    }
}

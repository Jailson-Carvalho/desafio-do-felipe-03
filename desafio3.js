class heroiGuerreiro{
        constructor(name, age, type, attack){
            this.name = name
            this.age = age
            this.type = type
            this.attack = attack
    }
    toString(){
        console.log(`O ${this.type} atacou usando ${this.attack}`)
    }
}

let guerreiro = new heroiGuerreiro("Shadow", 33, "Guerreiro", "espada.")
guerreiro.toString()
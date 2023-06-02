const object = {
    nome: 'Amaury', 
    idade: 25, 
    nacionalidade: 'Brasileiro',

    descrever: function (){
        console.log(`Meu nome é: ${this.nome} minha idade é: ${this.idade} minha nacionalidade é: ${this.nacionalidade}`)
    }
}   

object.descrever();
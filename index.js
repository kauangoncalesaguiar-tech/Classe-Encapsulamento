//Criar classe Aluno
class Aluno {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
};
const aluno1 = new Aluno ('Josesvaldo', 15);
//console.log (aluno1);

//Criação de Objeto
class Carro {
    constructor(modelo){
        this.modelo = modelo;
    }
};
const carro1 = new Carro ('Mustang');
//console.log (carro1);

//Identifique as partes do código
class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
}

//Qual é o nome da classe? Pessoa
//Qual é o construtor? this.nome = nome;
//Qual atributo está sendo criado? O atributo Pessoa, dizendo que os objetos a seguir pertencem a Pessoa
//O que significa this? Isto, 'nome' igual a ISTO 'nome'

//Encapsulamento 
class Conta {
    #saldo;
        constructor(valor) {
            this.#saldo = valor;
        }
};
let valor1 = new Conta(1000);
    console.log(valor1);
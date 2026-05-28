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
//Qual é o construtor? nome
//Qual atributo está sendo criado? 
//O que significa this? Esse, esse 'nome' significa 'nome'
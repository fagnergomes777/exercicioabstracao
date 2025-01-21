// Crie um objeto Pessoa que tenha os atributos nome e idade, e um método apresentar()
// que exiba no console uma mensagem como "Olá, meu nome é [nome] e tenho [idade] anos".

// Definindo o objeto Pessoa com os atributos nome e idade
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;  // Atributo nome
        this.idade = idade;  // Atributo idade
    }

    // Método apresentar() que exibe uma mensagem de apresentação
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

// Criando uma instância do objeto Pessoa
const pessoa1 = new Pessoa("João", 30);

// Chamando o método apresentar() da instância
pessoa1.apresentar();  // Exibe: "Olá, meu nome é João e tenho 30 anos."

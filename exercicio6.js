// Crie um objeto Estudante com os atributos nome, curso e anoIngresso. Adicione um
// método apresentar() que exiba "Meu nome é [nome], estudo [curso] e entrei em
// [anoIngresso]".

// Definindo o objeto Estudante com os atributos nome, curso e anoIngresso
class Estudante {
    constructor(nome, curso, anoIngresso) {
        this.nome = nome;         // Atributo nome
        this.curso = curso;       // Atributo curso
        this.anoIngresso = anoIngresso; // Atributo ano de ingresso
    }

    // Método apresentar() que exibe uma mensagem com informações sobre o estudante
    apresentar() {
        console.log(`Meu nome é ${this.nome}, estudo ${this.curso} e entrei em ${this.anoIngresso}.`);
    }
}

// Criando uma instância do objeto Estudante
const estudante1 = new Estudante("Ana", "Engenharia", 2020);

// Chamando o método apresentar() da instância
estudante1.apresentar();  // Exibe: "Meu nome é Ana, estudo Engenharia e entrei em 2020."

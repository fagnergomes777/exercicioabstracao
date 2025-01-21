// Crie um objeto Livro com os atributos titulo, autor, e anoPublicacao. Adicione um
// método resumo() que exiba uma mensagem como "O livro [titulo] foi escrito por [autor] em
// [anoPublicacao]".

// Definindo o objeto Livro com os atributos titulo, autor e anoPublicacao
class Livro {
    constructor(titulo, autor, anoPublicacao) {
        this.titulo = titulo; // Atributo título
        this.autor = autor;   // Atributo autor
        this.anoPublicacao = anoPublicacao; // Atributo ano de publicação
    }

    // Método resumo() que exibe uma mensagem com informações sobre o livro
    resumo() {
        console.log(`O livro "${this.titulo}" foi escrito por ${this.autor} em ${this.anoPublicacao}.`);
    }
}

// Criando uma instância do objeto Livro
const livro1 = new Livro("Dom Casmurro", "Machado de Assis", 1899);

// Chamando o método resumo() da instância
livro1.resumo();  // Exibe: "O livro "Dom Casmurro" foi escrito por Machado de Assis em 1899."

// Crie um objeto Cachorro com os atributos nome e raca. Adicione um método latir() que
// exiba a mensagem "O cachorro [nome] está latindo!".

// Definindo o objeto Cachorro com os atributos nome e raca
class Cachorro {
    constructor(nome, raca) {
        this.nome = nome;  // Atributo nome
        this.raca = raca;  // Atributo raça
    }

    // Método latir() que exibe uma mensagem indicando que o cachorro está latindo
    latir() {
        console.log(`O cachorro ${this.nome} está latindo!`);
    }
}

// Criando uma instância do objeto Cachorro
const cachorro1 = new Cachorro("Rex", "Pastor Alemão");

// Chamando o método latir() da instância
cachorro1.latir();  // Exibe: "O cachorro Rex está latindo!"

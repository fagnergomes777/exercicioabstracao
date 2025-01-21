// Crie um objeto Produto com os atributos nome, preco e estoque. Adicione um método
// verificarEstoque() que exiba "Ainda restam [estoque] unidades de [nome]"

// Definindo o objeto Produto com os atributos nome, preco e estoque
class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;        // Atributo nome
        this.preco = preco;      // Atributo preco
        this.estoque = estoque;  // Atributo estoque
    }

    // Método verificarEstoque() que exibe a quantidade de unidades restantes
    verificarEstoque() {
        console.log(`Ainda restam ${this.estoque} unidades de ${this.nome}`);
    }
}

// Criando uma instância do objeto Produto
const produto1 = new Produto("Camiseta", 29.99, 50);

// Chamando o método verificarEstoque() da instância
produto1.verificarEstoque();  // Exibe: "Ainda restam 50 unidades de Camiseta"

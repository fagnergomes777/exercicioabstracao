// Crie um objeto Celular com os atributos marca, modelo e bateria. Adicione um método
// verificarBateria() que exiba a mensagem "A bateria está em [bateria]%".

// Definindo o objeto Celular com os atributos marca, modelo e bateria
class Celular {
    constructor(marca, modelo, bateria) {
        this.marca = marca;  // Atributo marca
        this.modelo = modelo; // Atributo modelo
        this.bateria = bateria; // Atributo bateria (em porcentagem)
    }

    // Método verificarBateria() que exibe a mensagem com o status da bateria
    verificarBateria() {
        console.log(`A bateria está em ${this.bateria}%`);
    }
}

// Criando uma instância do objeto Celular
const celular1 = new Celular("Samsung", "Galaxy S21", 80);

// Chamando o método verificarBateria() da instância
celular1.verificarBateria();  // Exibe: "A bateria está em 80%"

// Crie um objeto Carro com os atributos marca, modelo e velocidade. Adicione um método
// acelerar() que aumente a velocidade em 10 e exiba a mensagem "Velocidade atual:
// [velocidade] km/h".

// Definindo o objeto Carro com os atributos marca, modelo e velocidade
class Carro {
    constructor(marca, modelo, velocidade) {
        this.marca = marca;       // Atributo marca
        this.modelo = modelo;     // Atributo modelo
        this.velocidade = velocidade || 0; // Atributo velocidade (inicializa com 0 se não for fornecido)
    }

    // Método acelerar() que aumenta a velocidade em 10 km/h e exibe a mensagem
    acelerar() {
        this.velocidade += 10; // Aumenta a velocidade em 10 km/h
        console.log(`Velocidade atual: ${this.velocidade} km/h`);
    }
}

// Criando uma instância do objeto Carro
const carro1 = new Carro("Ford", "Fiesta", 50);

// Chamando o método acelerar() da instância
carro1.acelerar();  // Exibe: "Velocidade atual: 60 km/h"
carro1.acelerar();  // Exibe: "Velocidade atual: 70 km/h"

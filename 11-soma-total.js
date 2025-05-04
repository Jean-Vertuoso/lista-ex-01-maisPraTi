const prompt = require('prompt-sync')();

//TODO Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.
let sum = 0;

for (let i = 0; i < 5; i++) {
    let num = Number(prompt(`Digite o ${i+1}o numero: `));
    if(isNaN(num)){
        throw new Error("Entrada inválida. Encerrando programa.");        
    } else {
        sum += num;
    }
}

console.log(`Soma total: ${sum}`);
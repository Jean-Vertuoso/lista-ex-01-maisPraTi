const prompt = require('prompt-sync')();

//TODO Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.
let num = Number(prompt('Digite um número: '));

if(isNaN(num) || num < 1) {
    console.log('Entrada inválida');    
} else {
    for (let i = 1; i < 11; i++) {
        console.log(`${num} x ${i} = ${num*i}`);
    }
}
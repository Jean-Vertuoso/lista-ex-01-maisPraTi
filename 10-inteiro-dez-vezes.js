const prompt = require('prompt-sync')();

//TODO Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
let num = Number(prompt('Digite um número: '));

if(isNaN(num) || !Number.isInteger(num)){
    console.log('Entrada inválida.');    
} else {
    for (let i = 0; i < 10; i++) {
       console.log(num);           
    }
}
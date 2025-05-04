const prompt = require('prompt-sync')();

//TODO Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.
let num = prompt('Digita um número: ');

if (num % 2 == 0) {
    console.log('É par');
} else {    
    console.log('É ímpar');
}
const prompt = require('prompt-sync')();

//TODO Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria 
// de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.
let weight = Number(prompt('Qual o peso: '));
let height = Number(prompt('Qual a altura: '));

if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0){
    console.log('Entrada inválida. O programa será encerrado.');
} else {
    const imc = weight / Math.pow(height, 2);
    
    if (imc < 18.5) {
        console.log('Baixo peso');    
    } else if(imc < 25) {
        console.log('Normal');        
    } else if(imc < 30) {
        console.log('Sobrepeso');            
    } else {
        console.log('Obesidade');                
    }
}
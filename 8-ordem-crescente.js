const prompt = require('prompt-sync')();

//TODO Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.
let num1 = Number(prompt('Digite o primeiro valor: '));
let num2 = Number(prompt('Digite o segundo valor: '));

if(isNaN(num1) || isNaN(num2)){
    console.log('Entrada inválida.');    
} else if(num1 === num2){
    console.log('Os números são iguais.');    
} else {
    if (num1 > num2) {
        console.log('1 - '+num1+'\n2 - '+num2);        
    } else {
        console.log('1 - '+num2+'\n2 - '+num1);    
    }
}
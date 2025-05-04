const prompt = require('prompt-sync')();

//TODO As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. 
//Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
let appleQuantity = Number(prompt('Quantas maçãs foram compradas: '));

if (isNaN(appleQuantity) || appleQuantity < 0) {
    console.log('Entrada inválida');    
} else if(appleQuantity === 0) {
    console.log('Nenhuma maçã foi comprada.');    
} else {
    const applePrice = (appleQuantity < 12) ? 0.30 : 0.25;
    console.log(`Valor total da compra: R$${(appleQuantity * applePrice).toFixed(2)}`);    
}
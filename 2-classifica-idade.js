const prompt = require('prompt-sync')();

//TODO Crie um programa que classifica a idade de uma pessoa em categorias (criança,adolescente, adulto, idoso) com base no valor fornecido, 
// utilizando uma estrutura decontrole if-else.
let age = Number(prompt('Digita uma idade: '));

if ( isNaN(age) || age <= 0) {
    console.log('Idade inválida.');    
} else {
    if (age < 12) {
        console.log('Criança');
    } else if(age >= 12  && age < 18){    
        console.log('Adolescente');
    } else if(age >= 18 && age < 60){
        console.log('Adulto');
    } else {    
        console.log('Idoso');
    }
}

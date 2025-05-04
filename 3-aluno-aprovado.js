const prompt = require('prompt-sync')();

//TODO Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
let grade = Number(prompt('Digita uma nota: '));

if (isNaN(grade) || grade < 0 || grade > 10) {
    console.log('Entrada inválida.');    
} else {
    if (grade < 5) {
        console.log('Reprovado');    
    } else if(grade >= 5 && grade < 7) {
        console.log('Recuperação');  
    } else {
        console.log('Aprovado');    
    }
}

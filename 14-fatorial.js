const prompt = require('prompt-sync')();

//TODO Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.
let factorial = 0;

let num = Number(prompt('Digite um número para saber o fatorial: '));

if(isNaN(num) || num < 0){
	throw new Error("Entrada inválida.");	
} else {
	if(num === 0){
		console.log(`Fatorial de 0 é 1`);
		process.exit(0);
	}
	factorial = num;
}

for (let i = num-1; i > 0; i--) {
	factorial = factorial * i;
}

console.log(`Fatorial de ${num} é ${factorial}`);
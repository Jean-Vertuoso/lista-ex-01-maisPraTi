const prompt = require('prompt-sync')();

let fatorial = 0;

let num = Number(prompt('Digite um número para saber o fatorial: '));

if(isNaN(num) || num < 0){
	throw new Error("Entrada inválida.");	
} else {
	if(num === 0){
		console.log(`Fatorial de 0 é 1`);
		process.exit(0);
	}
	fatorial = num;
}

for (let i = num-1; i > 0; i--) {
	fatorial = fatorial * i;
}

console.log(`Fatorial de ${num} é ${fatorial}`);
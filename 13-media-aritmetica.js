const prompt = require('prompt-sync')();

//TODO Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
let opt = 0;
let sum = 0;
let count = 0;

do {
    let num = Number(prompt('Digite um número decimal: '));
    if(isNaN(num)){
        throw Error('Entrada inválida');
    } else {        
        sum += num;		
		count++;
    }
    showMenu();
    opt = Number(prompt('Opção: '));
	if(isNaN(opt) || opt < 0 || opt > 1){
		throw new Error('Opção inválida.');
	}
} while (opt == 1);

console.log(`Média: ${(calcAvg(sum,count)).toFixed(2)}`);

function showMenu() {
    console.log('Deseja continuar?\n0 - Saber a média\n1 - Somar mais um número');    
}

function calcAvg(sum, count){
    return sum / count;
}
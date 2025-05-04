const prompt = require('prompt-sync')();

//TODO Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
let opcao = 0;
let soma = 0;
let cont = 0;

do {
    let num = Number(prompt('Digite um número decimal: '));
    if(isNaN(num)){
        throw Error('Entrada inválida');
    } else {        
        soma += num;		
		cont++;
    }
    mostrarMenu();
    opcao = Number(prompt('Opção: '));
	if(isNaN(opcao) || opcao < 0 || opcao > 1){
		throw new Error('Opção inválida.');
	}
} while (opcao == 1);

console.log(`Média: ${(calcularMedia(soma,cont)).toFixed(2)}`);

function mostrarMenu() {
    console.log('Deseja continuar?\n0 - Saber a média\n1 - Somar mais um número');    
}

function calcularMedia(soma, cont){
    return soma / cont;
}
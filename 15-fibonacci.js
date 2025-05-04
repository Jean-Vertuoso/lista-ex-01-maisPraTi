//TODO Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

/* COM ARRAYS

let numArr = [0,1];

for (let i = 2; i < 12; i++) {
	numArr[i] = numArr[i-1] + numArr[i-2];
	console.log(numArr[i-2]);	
}*/

// COM VARIAVEIS TEMPORARIAS

let num1 = 0;
let num2 = 1;
let sum = 0;

for (let i = 0; i < 10; i++) {	
	console.log(num1);
	sum = num2 + num1;
	num1 = num2;
	num2 = sum;
}
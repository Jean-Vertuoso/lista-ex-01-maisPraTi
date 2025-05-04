const prompt = require('prompt-sync')();

//TODO Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
//  Utilize switch-case para implementar a lógica de cada opção selecionada.
mostrarMenu();

let option = Number(prompt('Opção: '));

if (isNaN(option)){
    return console.log('Entrada inválida. O programa será encerrado.');
}

switch (option) {
    case 1:
        console.log('Você escolheu a Primeira Opção.');        
        break;
        
    case 2:
        console.log('Você escolheu a Segunda Opção.');        
            
        break;
            
    case 3:
        console.log('Você escolheu a Terceira Opção.');        
                
        break;

    default:
        console.log('Opção inválida. Reinicie o programa.');        
        break;
}

function mostrarMenu(){
    console.log('Escolha uma das opções:\n1 - Primeira opção\n2 - Segunda opção\n3 - Terceira opção');
}
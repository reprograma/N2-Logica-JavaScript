// Crie um programa que receba um valor e mostre a mensagem:
//  “Dentro” se estiver entre 3 e 5
// “Fora” se estiver fora do intervalo 4 e 7.

let numero = Number(prompt('Informe um número:'));


if (numero>=3 && numero<=5){
    console.log('Dentro')
}

if (numero<=4 || numero>=7){
    console.log('Fora')
}

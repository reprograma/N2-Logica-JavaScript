// Crie um algoritmo que receba duas notas de um aluno, calcule a média e mostre se ele foi aprovado! Nota maior ou igual a 6

let nota1 = 8;
let nota2 = 5;

let media = (nota1+nota2)/2;
if (media >= 6){
    console.log('Aprovado!')
}


// No programa anterior mostre se ele foi aprovado e também se ele foi reprovado! Caso tenha tirado menos que 6!

let nota1 = 8;
let nota2 = 5;

let media = (nota1+nota2)/2;
if (media >= 6){
    console.log('Aprovado!')
} else{
    console.log('Reprovado!')
}


Agora vamos dar a chance ao aluno de fazer uma recuperação caso ele tenha tirado uma nota entre 5 e 6.

let nota1 = 6;
let nota2 = 4;

let media = (nota1+nota2)/2;

if (media >= 6){
    console.log('Aprovado!')

}else if (media>=5) {
    console.log('Recuperação!')

}else{
    console.log('Reprovado!')
}
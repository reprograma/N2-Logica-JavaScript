// Crie um programa gerador de estrelas. O usuário informa um número, e o programa gera uma pirâmide de estrelas  no seguinte formato:
// Ex.: Usuário informa 5 e o programa retorna
// *
// * *
// * * *
// * * * * 
// * * * * * 

let numeroEstrelas = Number(prompt('Informe a quantidade de estrelas que você deseja gerar:'));
let estrelas = ''

for (let i=1;i<=numeroEstrelas;i++){
    estrelas+=' *'
    console.log(estrelas)
}
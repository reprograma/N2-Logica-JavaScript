// Vamos criar um programa Urna eletrônica para receber o voto de sua heroína favorita. Neste algoritmo o usuário digita o seu voto. 
// Se for 0 - voto nulo
// Se for 10 - voto Mulher Maravilha
// Se for 20 - voto Capitã Marvel
// Se não digitar nada, voto Vai pra Carla de Bona

let voto = Number(prompt('Informe o valor do seu voto:'))

switch(voto){
    case 0: 
        console.log('Você votou nulo,sério?') 
        break;
    case 10:
        console.log('Você votou na Mulher, Maravilha')
        break;
    case 20:
        console.log('Você votou na Capitã, Marvel')
        break;
    default: 
        console.log('O voto padrão é na Carla de Bona!')
}
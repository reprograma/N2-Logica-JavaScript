// Crie um  algoritmo contador de passos que acumule os valores de passos informados pelo usuário até que a meta seja atingida ( a meta é 1000 passos)

let passos = 0;
const META = 1000;

while(passos<META){
    passos += Number(prompt('Informe o número de passos'))
}

alert('Parabéns, você deu '+ passos +' passos!')
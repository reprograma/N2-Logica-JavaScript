// Faça um algoritmo que receba o 
// array = [5, 37, 18, 59, 12, -5] e faça as seguintes operações:
//  Mostre o maior
//  Mostre o menor

let array = [5,37,18,59,12,-5];
let maior = -Infinity;
let menor = Infinity;

for (let i=0; i<array.length;i++){
  if(array[i]>maior){
    maior = array[i]
  }

    if(array[i]<menor){
    menor = array[i]
  }
}

console.log(`O maior é ${maior}  e o menor é ${menor} `)
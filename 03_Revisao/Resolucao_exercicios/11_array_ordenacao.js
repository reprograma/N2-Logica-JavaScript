//Faça um algoritmo que receba o array = [5, 37, 18, 59, 12, -5] e ordene esse array do menor para o maior (sem apelar para o sort)


// Fazendo um laço dentro de outro laço
let array = [5, 37, 18, 59, 12, -5]

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[i]) {
            let aux = array[i];
            array[i] = array[j]
            array[j] = aux;
        }
    }
}
console.log(array)
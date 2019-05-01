// Crie um objeto pessoa que receba as propriedades nome, idade e altura, e crie um método fazer aniversário que adicione 1 ano a idade

let pessoa = {
    nome:'Fulana',
    idade:28,
    altura:1.65,
    fazerAniversario: function(){  
        this.idade++;
    }
}

// outra forma de criar um método:
let pessoa1= {
    nome:'Beltrana',
    idade:25,
    altura:1.80,
    fazerAniversario(){this.idade++;}
}

// Vamos ver como ficam os objetos pessoa e pessoa1
console.log(pessoa)
console.log(pessoa1)

// Acessando propriedade nome
pessoa.nome
pessoa1.nome

// Acessando as idades
pessoa.idade
pessoa1.idade

// Chamando o método fazer aniversário - Atenção para o ()
pessoa.fazerAniversario()
pessoa1.fazerAniversario()

//Conferindo se a idade aumentou 1 ano
pessoa.idade
pessoa1.idade
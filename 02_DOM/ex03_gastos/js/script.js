// Coletar o elemento botao
var botao = document.querySelector('.transacao__button')

botao.addEventListener('click',function(evento){
    evento.preventDefault();
    // Inputs (elementos no DOM)
    var inputTransacao = document.getElementById('transacaoInputName');
    var inputValor = document.querySelector('#transacaoInputMoney');
    var inputData = document.getElementById('transacaoInputDate');
    
    // Valores dos inputs
    var valorTransacao = inputTransacao.value;
    var valorValor = inputValor.value;
    var valorData = inputData.value;
    
    var linha = document.createElement('tr');

    var colunaTransacao = document.createElement('td')
    colunaTransacao.textContent =  valorTransacao
    linha.appendChild(colunaTransacao)

    var colunaValor = document.createElement('td')
    colunaValor.textContent = valorValor
    linha.appendChild(colunaValor)

    var colunaData = document.createElement('td')
    colunaData.textContent = valorData
    linha.appendChild(colunaData)

    var tabela = document.querySelector('.extrato__body')
    tabela.appendChild(linha)
    

    var corpo = document.querySelector('body')
    if (valorValor>0 && valorValor<=10){
        corpo.style.backgroundColor = 'green';
    }else if (valorValor>10 && valorValor<=50){
        corpo.style.backgroundColor = 'orange';
    }else if(valorValor>50){
        corpo.style.backgroundColor = 'red';
        alert('Miga sua loka!')
    }
    // Uma forma de apagar tudo após a inclusão!  
    // inputTransacao.value = ""
    //   inputValor.value = ""
    //   inputData.value =""
    //Outra forma mais elegante...
    document.querySelector('.transacao__form').reset();
})
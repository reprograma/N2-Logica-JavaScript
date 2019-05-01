# Lógica aplicada + JavaScript | DOM

# DOM
- DOM é uma sigla que significa **D**ocument **O**bject **M**odel.

- Quando a página é carregada o browser cria um objeto que representa os elementos da página a partir do HTML.

- A forma mais fácil de acessar e manipular o DOM é usando JavaScript

- Componentes: 
  - Document - representa o documento HTML 
  - Elements - são todas as tags que estão no arquivo HTML e se transformam em elementos da árvore DOM
  - Texts - é o conteúdo de texto que vai entre os elementos (tags).
  - Attributes - são os todos atributos para um nó específico. No caso, o attribute class="HERO" está associado ao elemento `<p>`, outros exemplos de atributos são o href, o id, entre outros.


## Métodos para manipular o DOM

`getElementById()`- Retorna o elemento que estiver contendo o nome do ID passado. Como os IDs devem ser únicos, é um método muito útil para pegar apenas o elemento desejado.

`getElementsByClassName()` - Retorna uma coleção de todos elementos que estiverem contendo o nome da classe passada.

`getElementsByTagName()`- uma coleção de todos elementos que contennham a tag name passada.

`querySelector()` - Retorna o primeiro elemento que possui o seletor CSS passado (usa mesma sintaxe do CSS) Exemplo: querySelector('.classe'), querySelector('#id') e querySelector('tag')

`querySelectorAll()` - semelhante ao querySelector(), só que retorna todos os elementos que se equiparam ao seletor
>Exercício: DOM


## Escutando eventos

Com JS é possível criar interatividades com os elementos da página, para isso nós podemos adicionar um escutador de eventos. 

Exemplo de evento de click (quando o usuário clica em um elemento):
```javascript
  elemento.addEventListener('click', function(event) {
      //Descreva aqui o que você quer que a função execute quando o evento for acionado
  }
```
Os dois principais parâmetros do addEventListener() são:
- O tipo de evento que você deseja 
- A função de callback


## Manipulando texto

- Podemos manipular texto usando a propriedade `textContent` do elemento
- Para acessar o conteúdo de texto `elemento.textContent`
- Para atribuir um novo texto `elemento.textContent = "novo texto"`
- Atenção: elementos do tipo input acessamos o texto por meio da propriedade `value`. Ex.: `elemento.value`.


## Manipulando estilo e classes
 
 Você pode manipular estilos de elementos do DOM de duas formas: pela propriedade `style` ou manipulando as `classes`.

 ### Usando a propriedade style
 Você pode definir o estilo fazendo:
 `elemento.style.propriedadeCSS = "valor da propriedade CC"`

 Ex.: elemento.style.color = 'red';
      elemento.style.backgroundColor = 'blue';
Note que quando a propriedade tem mais de uma palavra, ela é separada por hífen no CSS, mas no javascript ela é escrita usando o padrão CamelCase (ex. background-color -> backgroundColor)

### Usando classes
A forma mais correta de definir estilo é usando o CSS (feito para isso), portanto, quando manipulamos classes usando javascript estamos indiretamente manipulando o estilo. Assim podemos garantir que os efeitos definidos no CSS sejam aplicados em um elemento apenas adicionando e/ou removendo classes. 

`className` - acessa a propriedade de classe e atribui o valor que foi passado
`classList` - acessa a lista de classes de um elemento
`classList.contains()` - verifica se elemento contem a classe passada
`classList.remove()` - remove a classe do elemento selecionado
`classList.add()` - adiciona a classe no elemento selecionado



## Criação de elementos no HTML

`createElement` - cria um elemento HTML
`createTextNode` - criar um nó de texto para o elemento
`appendChild` - adiciona elemento como 'filho' de um elemento 'pai'
`insertBefore`- insere elemento antes de um determinado elemento

Existem muitas formas de interagir com o DOM, se quiser saber mais pesquise nas páginas do MDN e da W3schools.
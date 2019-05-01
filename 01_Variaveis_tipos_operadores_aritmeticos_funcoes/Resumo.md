# Lógica aplicada + JavaScript

## Passo a passo no git/github
- Configurando seu usuario (nome): `git config --global user.name`
- Configurando seu usuario (email):`git config --global user.email`
- Clonando repositório: `git clone [url do repositório no git]`
- Acessando o repositório: `cd [nome_repositorio]`
- Verificando o caminho do repositório local: `git remote -v`  
- Alterando o destino do repositório:  `git remote set-url origin [url do novo repositório]`
- Adicionando alterações: `git add -A (adicionar tudo) ou git add .`
- Comitando: `git commit -m "Mensagem de commit"`
- Subindo alterações: `git push origin master`

## Entendendo o papel do JS:
Desabilitando o JS da página: chrome://settings/content (no Chrome)

## Variáveis
- Declaramos uma única vez `var nomeDaVariavel`
- Se declaramos e não atribuímos nenhum valor o valor é undefined;
- Atribuir um valor `nomeDaVariavel = valor` (o sinal = equivale a palavra "recebe");
- Podemos mudar o valor atribuindo um novo valor (a variável joga fora o anterior);
- Para saber o que está guardado numa variável basta digitar o nome desta variável ou usar um console.log() 

### Regras para dar nomes para variáveis em JS:
- Não pode ter espaço;
- Não pode começar por número;
- Não pode ter caracteres especiais , somente _ (underline e $);
- Não pode usar palavras reservadas (for, return, var);
- Devemos usar nomes semânticos (que representem o que estamos guardando na variável);
- Adotaremos o padrão CamelCase.

## Tipos
- `string`: textos representados entre aspas simples ou duplas 'texto' ou "texto";
- `number`: valores numéricos inteiros (ex: 15) e decimais (ex:12.5); 
- `boolean`: valores lógicos true ou false;
- `undefined`: valor indefinido (variável sem valor atribuido, referência a um valor inexistente);
- `null`: valor nulo;
- `object`: tudo o que não se encaixa nas demais categorias é classificado como objeto

O método `typeof` retorna o tipo de um determinado valor ou variável


## Operadores aritméticos
- Soma `+` (Atenção!!! Se um dos membros envolvidos na operação for uma string será feita uma concatenação, fique esperta)
- Subtração `-`
- Multiplicação `*`
- Divisão `/`
- Potência `**` 
- Resto da divisão `%` (5 dividido por 2 dá 2 e tem como resto da divisão 1)

## Funções
- Servem para executar blocos de código que se repetem com frequência
- São declaradas usando a palavra `function` mais o nome da função - Ex.: `function soma()`
- Se vc criar uma variável e atribuir uma função você tem o mesmo efeito - Ex: `let soma = function()` 
- Para chamar a função basta escrever o nome dela e acrescentar o parenteses - Ex.: `soma()` executa o bloco definido pela função
- Atenção!!!! Se você criar a função e não chamar ela não é executada 
- Podem ter parâmetros function `soma(a,b)`, note que `a` e `b` são parâmetros que podem ser passados para a função.
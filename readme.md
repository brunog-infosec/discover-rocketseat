# Projeto de LinkTree

- Página parecida com link tree


# Alinhamento de elemento inline:

Arquivos de imagem, e tag de link (a) são inline por padrão, não conseguindo aplicar margem automática, 
podemos então usar o text-align: center;

# Alinhamento de elementos block e relative

Elementos block são alinhados com
margin: 0 auto;

# Alinhamentos de elementos flex
Elemento flex, são alinhados com:
justify-content: center;
align-items: center;

# Alinhamento de elementos absolute:
Elementos absolute são alinhados com:
top: 50%;
left: 0;
z-index: 1;
transform: translateY(-50%);

# Javascript
É uma linguagem interpreta pelo navegador,
para usarmos como backend utilizados o node.js que será interpretado pelo computador. Desktop (electron) e Mobile(react native) bibliotecas e frameworks. Regulamentado pelo orgão Ecma script. Muito utilizada na web e pelas FAANG.
- Plataformas online: fronteditor.dev / codepen.io
- Menu desenvolvedor no navegador: Tecla F12
- Existem palavras reservadas para variáveis no javascript: let, var, const.

## Variaveis e Tipos de dados
Tipos de variaveis:
  Let = pode ser alteradas
  const = não pode ser alterada
Tipos de dados: textos, numeros, booleanos, ou arrays.
  Strings: "" '' ``
  Numeros: 1, 1.20
  Boolen: true, false

## Funções
Agrupamento de código
Reuso de código
Mini programa dentro do programa principal
Exemplo:
```javascript
alert("Fala,Dev")

function  alert(text) {
  return text
}

function soma(a,b) {
  return a + b
}
```

## Objetos
Ele domina o javascript.
Tudo no js é objeto.
- Atributos são as propriedades do objeto.
- Métodos são as funcionalidades de um objeto.
Exemplo:

```javascript
//Declaração de um objeto
const person = {
  age: 18,
  drive: function() {
    console.log("Estou dirigindo.. ")
  }
}

const celular = {
  cor: "preto",
  ligar: function() {
    alert("Ligando...")
  },
  modelo: "Iphone 14",
  marca: "Apple",
  valor: 1400
}

//usando o objeto
person.drive()

//unsando o objeto celular
celular.ligar()

```

Na web, o objeto principal é o "document". Então para pesquisar os dados do html usamos: 
```javascript

  document.querySelector("a").click()
```

## Função para mudar a classe do elemento (Modo Escuro/Claro)
Vamos criar uma função no js para fazer a mudança da classe de
acordo com nossa estilização já feita:
```html
  <div id="switch" onclick="toggleMode()">
```

```javascript
// Essa função vai verificar se tem a classe e se tiver remove, senão tiver ele adiciona a classe.
function toggleMode() {
  const html = document.documentElement

  // if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }

  html.classList.toggle('light')
}
```
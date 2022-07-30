console.log("Salve!");

console.log(document);

const pageTitle = document.getElementsByTagName("h1");
const text = document.getElementById("text");

// Pegando o valor do atributo src do elemento html "exemplo"
const exemplo = document.getElementById("exemplo");
console.log(exemplo.getAttribute("src"));

exemplo.setAttribute("id", "mudando-o-id-da-imagem-como-exemplo");

// Trabalhando com classes
console.log(exemplo.classList);

exemplo.classList.add("alguma-coisa");

console.log(exemplo.classList);

exemplo.classList.remove("trabalhando-com-classes");

console.log(exemplo.classList);

// exemplo.classList.toggle("classe-toggle");
// exemplo.classList.toggle("alguma-coisa");

const buttonShuffle = document.getElementById("shuffle-img");

buttonShuffle.addEventListener("click", () => {
  exemplo.classList.toggle("show");
  exemplo.classList.toggle("hidden");
});

console.log(exemplo.classList.contains("alguma-coisa"));

console.log(exemplo.classList);

console.log(pageTitle);

console.log(text);

text.innerText = "Outro texto agora.";

// Seletores DOM

// ById - UM Elemento
const p = document.getElementById("text");
// ByClassName - +deUM Elemento
const containers = document.getElementsByClassName("container");
console.log(containers);
// Retorna uma html collection com as duas divs que possuem essa classe
// ByTagName - +deUM ELEMENTO
const titles = document.getElementsByTagName("h1");
console.log(titles);

// QuerySelector QuerySelectorAll

const firstDiv = document.querySelector(".container");
// Retorna o primeiro aparição de elemento com aquele seletor
// Retorna NodeList
console.log(firstDiv);

const allDiv = document.querySelectorAll(".container");

console.log(allDiv);

// Vendo informações de um elemento html

const textExp2 = document.getElementById("text");

console.log(textExp2.textContent);

textExp2.innerText = "<h2>EXEMPLO QUE NÃO FUNCIONA!</h2>";

textExp2.innerHTML = "<h3>EXEMPLO QUE FUNCIONA!</h3>";

const input = document.getElementById("userText");

console.log(input.value);

// EVENTOS!

// Capturando o botão

const button = document.getElementById("printText");

// Colocar um telefonista no meu botão

let caixinha = "";

button.addEventListener("click", () => {
  // Vou pegar aquele input la de trás, e colocar ele para aparecer dentro da div que a gente caputurou com o querySelector

  firstDiv.innerText = input.value;
});

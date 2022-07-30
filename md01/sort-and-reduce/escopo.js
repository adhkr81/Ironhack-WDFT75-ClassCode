// Escopo Global!

// Tudo q tiver aqui vai ser executado

// Nem tudo que é executado, aparece no console

const name = "Alexandre";
const age = 26;

console.log(age);

// Escopo fechado

const arr = [10, 25, 38, 49, 78, 96, 55, 21, 212, 30];

for (let i = 0; i < arr.length; i++) {
  const batata = "batata";
  // Batata não está disponivel no escopo global, apenas dentro do FOR
}

console.log(batata);

// Escopo fechado - functions

function exm() {
  const goiaba = "goiaba";
  console.log(goiaba);
  return goiaba;
}

function exmp2(par1) {
  if (par1 === undefined) {
    return "Sem parametro";
  } else {
    return "Com paramentro";
  }
}

arr.map((currentElement) => {
  console.log(currentElement);

  return currentElement;
});

function casaDeMaquinas() {
  maquina1();
  maquina2();
  maquina3();
}

casaDeMaquinas(); // botão

const returnDaCasaDeMaquina = casaDeMaquinas();
console.log(returnDaCasaDeMaquina);

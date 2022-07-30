function mult(a, b) {
  return a * b;
}

//Mini do mini do mini
const mult1Linha = (a, b) => a * b;

console.log(mult(2, 2));

function sub(a, b) {
  return a - b;
}

console.log(sub(10, 20));
console.log(sub(20, 10));

function printLTName() {
  console.log("Alexandre");
}

printLTName();

// Arrow function

const printTAsNames = () => {
  console.log("Anna e Karen");
};

printTAsNames();

// Omitindo o "return"

const returnTAsNames = () => "Anna e Karen";

console.log(returnTAsNames());

// Recebendo um parametro

const newLTIronhack = (ltName) => `Bem vindo, ${ltName}`;

console.log(newLTIronhack("Joelinthon"));

//Callbacks
// Soon
//Funções anonimas
// Soon too

// Arrays - Lista

// É uma lista de dados organizados por index

const arr = [
  "Pode ter todos os tipos de dados aqui",
  25,
  false,
  "Outra string",
  ["Inclusive outra array"],
  {
    name: "Alexandre",
  },
];

// Breaket Notation

// const index = 3;

// console.log(arr[index]);

// console.log(arr[arr.length - 1]);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// Array 2d ou Array dentro de array

const matriz = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
];

console.log(matriz[0]);

console.log(matriz[1][5]);

// Tirar a media de cada array interna, e retornar uma array só com 3 elementos.

// OBS: NÃO PODE USAR FUNÇÃO, TEM Q FAZER COM FOR E SALVAR O RESULTADO NUMA VARIAVEL

// const result = [];

// for (let i = 0; i < matriz.length; i++) {
//   let avg = 0;

//   for (let j = 0; j < matriz[i].length; j++) {
//     // console.log(i, j);
//     avg = avg + matriz[i][j];
//   }

//   result.push([avg / matriz[i].length]);
// }

// console.log(result);

// Console.log nas colunas

// for (let i = 0; i < 1; i++) {
//   for (let j = 0; j < matriz[i].length; j++) {
//     let coluna = [];
//     coluna.push(matriz[i][j]);
//     coluna.push(matriz[i + 1][j]);
//     coluna.push(matriz[i + 2][j]);

//     console.log(coluna);
//   }
// }

// um for so, meio méh

// for (let j = 0; j < matriz[0].length; j++) {
//   let coluna = [];
//   coluna.push(matriz[0][j]);
//   coluna.push(matriz[1][j]);
//   coluna.push(matriz[2][j]);

//   console.log(coluna);
// }

// Objetos
// Key: Value

const user = {
  name: "Alexandre",
  age: 26,
  isCute: true,
  address: {
    street: "Rua dos bobos",
    number: 0,
  },
  cohorts: [65, 71, 75],
};

// Dot notation
// Quando a gente sabe o nome da chave, rs

console.log(user.age);

const key = "name";

// Breaket notation

console.log(user["address"].street);

// Console.log no numero da minha primeira turma

console.log(user.cohorts[0]);

// For in

for (let key in user) {
  console.log(user[key]);
}

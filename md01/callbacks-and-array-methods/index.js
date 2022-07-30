// // Callbacks

// const sum = (a, b) => a + b; // +

// const sub = (a, b) => a - b; // -

// // Passando função para outra como parametro

// //Arrow

// const calculate = (a, b, op) => op(a, b); // =

// // Função normal
// function calculate(a, b, op) {
//   if (typeof a !== "number" || typeof b !== number) {
//     return "Parametro errados!";
//   }

//   return op(a, b);
// }

// // Invocando as funções e passando callbacks
// console.log(calculate(10, 50, sum));
// console.log(calculate(30, 20, sub));

const calculate = (callback, num1, num2) => callback(num1, num2);

// Callback anonima

calculate(
  function sum(a, b) {
    return a + b;
  },
  10,
  20
);

// Anonimo de verdade

calculate(
  (a, b) => {
    return a + b;
  },
  10,
  20
);

// Menor ainda

calculate((a, b) => a + b, 10, 20);

function operario(insumo, maquina1, maquina2, maquina3) {
  const result1 = maquina1(insumo);
  const result2 = maquina2(result1);

  return maquina3(result2);
}

const newCalculator = new Converter(4.9, 6.13, 0.03);

const input = document.getElementById("rs-amount");
const button = document.getElementById("button-converter");
const strong = document.getElementById("result");
const select = document.getElementById("currence-select");

button.addEventListener("click", (event) => {
  event.preventDefault();

  strong.innerText = newCalculator.generalConverter(input.value, select.value);
});

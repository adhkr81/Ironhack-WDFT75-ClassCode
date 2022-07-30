class Converter {
  constructor(currentDolarValue, currentLibraValue, currentIeneValue) {
    // this.currentDolarValue = currentDolarValue;
    // this.currentLibraValue = currentLibraValue;

    this.currenceValues = {
      dolar: currentDolarValue,
      libra: currentLibraValue,
      iene: currentIeneValue,
    };
  }

  rsToDolar(input) {
    return (input / this.currentDolarValue).toFixed(2);
  }

  rsToLibra(input) {
    return (input / this.currentLibraValue).toFixed(2);
  }

  generalConverter(input, currenceType) {
    return (input / this.currenceValues[currenceType]).toFixed(2);
  }
}

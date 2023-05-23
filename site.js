import Calculator from "./calculator.js";

const previousDisplay = document.querySelector('[data-display-previous]');
const actualDisplay = document.querySelector('[data-display-actual');

const calc = new Calculator(actualDisplay, previousDisplay);

const numberButtons = document.querySelectorAll('[data-number]');
numberButtons.forEach(btn => btn.addEventListener('click',e => calc.enterNumber(e)))

const clearButton = document.querySelector('[data-clear]');
clearButton.addEventListener('click',() => calc.clearDisplay())

const deleteButton = document.querySelector('[data-delete]');
deleteButton.addEventListener('click',() => calc.deleteLastDigit())

const divideButton = document.querySelector('[data-divide]')
divideButton.addEventListener('click',() =>  calc.divideOperation())

const multiplyButton = document.querySelector('[data-multiply]')
multiplyButton.addEventListener('click',() =>  calc.multiplyOperation())

const minusButton = document.querySelector('[data-minus]')
minusButton.addEventListener('click',() =>  calc.substractOperation())

const plusButton = document.querySelector('[data-plus]')
plusButton.addEventListener('click',() =>  calc.addOperation())

const pointButton = document.querySelector('[data-point]');
pointButton.addEventListener('click',() =>  calc.makeFloat())

const equalButton = document.querySelector('[data-equal]');
equalButton.addEventListener('click',() =>  calc.resultOperation())
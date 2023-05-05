const displays = document.querySelectorAll('.calculator-display-text');
const previousDisplay = displays[0];
const actualDisplay = displays[1];
let operation = null;
let storedNumber = 0;

previousDisplay.textContent ='';
clearActualDisplay();

function clearActualDisplay(){
    actualDisplay.textContent = 0;
    newLine = true;
}

function updatePreviousDisplay(sign){
    previousDisplay.textContent = Math.round(storedNumber*100)/100 + sign; 
}

const numberButtons = document.querySelectorAll('.button-number');
numberButtons.forEach(btn => btn.addEventListener('click',e => enterNumber(e)))

function enterNumber(e) {
    if((actualDisplay.textContent === '0' && newLine === false)) newLine = true;
    
    if(newLine)
    actualDisplay.textContent = '';

    actualDisplay.textContent += e.target.textContent;
    newLine = false;
}

const clearButton = document.querySelector('.button-clear');
clearButton.addEventListener('click',clearDisplay)

function clearDisplay() {
    previousDisplay.textContent = '';
    clearActualDisplay();
    operation = null;
    storedNumber = 0;
}

const deleteButton = document.querySelector('.button-delete');
deleteButton.addEventListener('click',deleteLastDigit)
function deleteLastDigit() {
    actualDisplay.textContent = actualDisplay.textContent.slice(0,actualDisplay.textContent.length-1)
    if (actualDisplay.textContent.length === 0) clearActualDisplay();
}

const divideButton = document.querySelector('.button-divide')
divideButton.addEventListener('click', divideOperation)
function divideOperation(){
    operate('/');
    operation = divide;
}

const multiplyButton = document.querySelector('.button-multiply')
multiplyButton.addEventListener('click', multiplyOperation)
function multiplyOperation(){
    operate('*');
    operation = multiply;
}

const minusButton = document.querySelector('.button-minus')
minusButton.addEventListener('click', substractOperation)
function substractOperation(){
    operate('-');
    operation = substract;
}

const plusButton = document.querySelector('.button-plus')
plusButton.addEventListener('click', addOperation)
function addOperation(){
    operate('+');
    operation = sum;
}

const pointButton = document.querySelector('.button-point');
pointButton.addEventListener('click', makeFloat)
function makeFloat(){
    actualDisplay.textContent += '.';
    newLine = false;
}

const equalButton = document.querySelector('.button-equal');
equalButton.addEventListener('click', resultOperation)
function resultOperation(){
    operate('');
    operation = null;
}

function operate(sign){
    if(storedNumber === 0 && operation === null) {
        storedNumber = getNumberFromDisplay();
    }
    else if(operation !== null) {
        operation()
    }
    updatePreviousDisplay(sign);
    clearActualDisplay();
}

function divide(){
    const enteredNumber = getNumberFromDisplay();
    if(enteredNumber !== 0)
    storedNumber /= enteredNumber;
    else
    alert("Dividing by 0 is forbidden!");
}

function multiply(){
    storedNumber *= getNumberFromDisplay();
}

function substract(){
    storedNumber -= getNumberFromDisplay();
}

function sum(){
    storedNumber += getNumberFromDisplay();
}

function getNumberFromDisplay() {
    return parseFloat(actualDisplay.textContent);
}
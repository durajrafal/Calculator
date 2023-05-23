class Calculator{
    constructor(actualDisplay, previousDisplay){
        this.operation = null;
        this.storedNumber = 0;
        this.newLine = false;
        this.actualDisplay = actualDisplay;
        this.previousDisplay = previousDisplay;
        this.clearDisplay();
    }

    clearActualDisplay(){
        this.actualDisplay.textContent = 0;
        this.newLine = true;
    }

    updatePreviousDisplay(sign){
        this.previousDisplay.textContent = Math.round(this.storedNumber*100)/100 + sign; 
    }

    enterNumber(e) {
        if((this.actualDisplay.textContent === '0' && this.newLine === false)) this.newLine = true;
        
        if(this.newLine)
        this.actualDisplay.textContent = '';
    
        this.actualDisplay.textContent += e.target.textContent;
        this.newLine = false;
    }

    clearDisplay() {
        this.previousDisplay.textContent = '';
        this.clearActualDisplay();
        this.operation = null;
        this.storedNumber = 0;
    }

    deleteLastDigit() {
        this.actualDisplay.textContent = this.actualDisplay.textContent.slice(0,this.actualDisplay.textContent.length-1)
        if (this.actualDisplay.textContent.length === 0) this.clearActualDisplay();
    }

    operate(sign){
        if(this.storedNumber === 0 && this.operation === null) {
            this.storedNumber = this.getNumberFromDisplay();
        }
        else if(this.operation !== null) {
            this.operation()
        }
        this.updatePreviousDisplay(sign);
        this.clearActualDisplay();
    }

      
    getNumberFromDisplay() {
        return parseFloat(this.actualDisplay.textContent);
    }

    divide(){
        const enteredNumber = this.getNumberFromDisplay();
        if(enteredNumber !== 0)
        this.storedNumber /= enteredNumber;
        else
        alert("Dividing by 0 is forbidden!");
    }
    
    multiply(){
        this.storedNumber *= this.getNumberFromDisplay();
    }
    
    substract(){
        this.storedNumber -= this.getNumberFromDisplay();
    }
    
    sum(){
        this.storedNumber += this.getNumberFromDisplay();
    }
    
    sram(){
        console.log('sram')
    }

    divideOperation(){
        this.sram();
        this.operate('÷');
        this.operation = this.divide;
    }

    multiplyOperation(){
        this.operate('*');
        this.operation = this.multiply;
    }

    substractOperation(){
        this.operate('-');
        this.operation = this.substract;
    }

    addOperation(){
        this.operate('+');
        this.operation = this.sum;
    }

    resultOperation(){
        this.operate('');
        this.operation = null;
    }

    makeFloat(){
        this.actualDisplay.textContent += '.';
        this.newLine = false;
    }
   
}

export default Calculator;
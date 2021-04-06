// use a class to store all methods for calculator functionality
class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    //these variables gives us a way to set these text elements inside of our calculator class
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }

  clear(){   // this will clear our calculations (different variables)
    this.currentOperand = '';   // redefines the currentOperand into an empty string. Removes any value in the current operand div
    this.previousOperand = '';  // same as above
    this.operation = undefined; // makes it so we dont have an operation selected if we clear things
  }

  delete(){   // removing a single number

  }

  appendNumber(number){   // add a number to the screen when clicked on by the user. takes in the number as an argument
    console.log("current operand is " + this.currentOperand);
    this.currentOperand = number;
    console.log("current operand is now " + this.currentOperand);

  }

  chooseOperation(operation){  // when a user clicks on an operation. takes in the operation as an argument

  }

  compute(){  // take our values inside of the calculator and compute a single value to be shown

  }

  updateDisplay(){   // update the values inside of our output
    this.currentOperandTextElement.innerText = this.currentOperand
  }
}

// these link our HTML calculator elements to JS
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


// hook up all the variables above and make them operate the functions listed in the Calculator class on our browser calculator
// instance of our Calculator class which is a new Object
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)


// when using querySelectorAll it converts them into an array. forEach button in the array,we add an event listener that when we click on them...
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    // take the number (.innerText) of the number button clicked i.e. take the HTML '7' when 7 is clicked 
    calculator.appendNumber(button.innerText)
    // our display is updated every time we click the button
    calculator.updateDisplay()
  })
})
















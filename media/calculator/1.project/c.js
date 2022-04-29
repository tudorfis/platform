const input = document.querySelector( '#input' ), // input/output button
    numbers = document.querySelectorAll( '.numbers div' ), // number buttons
    operators = document.querySelectorAll( '.operators div' ), // operator buttons
    result = document.querySelector( '#result' ), // equal button
    clear = document.querySelector( '#clear' ) // clear button
    
let resultDisplayed = false; // flag to keep an eye on what output is displayed

const operatorSymbols = [ '+', '-', 'x', '÷' ]

// adding click handlers to number buttons
for ( const number of numbers ) {
    number.addEventListener("click", function (e) {
        const numberTyped = e.target.innerHTML

        // storing current input string and its last character in variables - used later
        const lastChar = input.innerHTML[input.innerHTML.length - 1]

        // if result is not diplayed, just keep adding
        if ( !resultDisplayed ) {
            input.innerHTML += numberTyped
        } 
        else if ( 
            resultDisplayed &&
            operatorSymbols.includes( lastChar )
        ) {
            // if result is currently displayed and user pressed an operator
            // we need to keep on adding to the string for next operation
            resultDisplayed = false
            input.innerHTML += numberTyped
        } 
        else {
            // if result is currently displayed and user pressed a number
            // we need clear the input string and add the new input to start the new opration
            resultDisplayed = false
            input.innerHTML = numberTyped
        }
    })
}

// adding click handlers to number buttons
for ( const operator of operators ) {
    operator.addEventListener("click", e => {
        const operatorTyped = e.target.innerHTML 

        // storing current input string and its last character in variables - used later
        const currentString = input.innerHTML
        const lastCharIndex = currentString.length - 1
        const lastChar = currentString[lastCharIndex]

        // if last character entered is an operator, replace it with the currently pressed one
        if ( operatorSymbols.includes( lastChar ) ) {
            const newString = currentString.substring( 0, lastCharIndex ) + operatorTyped
            input.innerHTML = newString
        } 
        else if (currentString.length == 0) {
            // if first key pressed is an opearator, don't do anything
            console.log("enter a number first")
        } 
        else {
            // else just add the operator pressed to the input
            input.innerHTML += operatorTyped
        }

    })
}

// on click of 'equal' button
result.addEventListener("click", function () {

    // this is the string that we will be processing eg. -10+26+33-56*34/23
    const inputString = input.innerHTML

    // forming an array of numbers. eg for above string it will be: numbers = ["10", "26", "33", "56", "34", "23"]
    const numbers = inputString.split(/\+|\-|\x|\÷/g)

    // forming an array of operators. for above string it will be: operators = ["+", "+", "-", "*", "/"]
    // first we replace all the numbers and dot with empty string and then split
    const operators = inputString.replace(/[0-9]|\./g, "").split("")

    console.log(inputString)
    console.log(operators)
    console.log(numbers)
    console.log("----------------------------")

    // now we are looping through the array and doing one operation at a time.
    // first divide, then multiply, then subtraction and then addition
    // as we move we are alterning the original numbers and operators array
    // the final element remaining in the array will be the output

    let divide = operators.indexOf("÷")
    while (divide != -1) {
        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1])
        operators.splice(divide, 1)
        divide = operators.indexOf("÷")
    }

    let multiply = operators.indexOf("x")
    while (multiply != -1) {
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1])
        operators.splice(multiply, 1)
        multiply = operators.indexOf("x")
    }

    let subtract = operators.indexOf("-")
    while (subtract != -1) {
        numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1])
        operators.splice(subtract, 1)
        subtract = operators.indexOf("-")
    }

    let add = operators.indexOf("+")
    while (add != -1) {
        // using Number is necessary, otherwise it will result in string concatenation :)
        numbers.splice(add, 2, Number(numbers[add]) + Number(numbers[add + 1]))
        operators.splice(add, 1)
        add = operators.indexOf("+")
    }

    input.innerHTML = numbers[0] // displaying the output
    resultDisplayed = true // turning flag if result is displayed
})

// clearing the input on press of clear
clear.addEventListener("click", function () {
    input.innerHTML = ""
})
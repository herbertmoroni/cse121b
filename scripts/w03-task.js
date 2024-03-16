/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add (number1, number2)
{
    return number1 + number2;    
}

function addNumbers()
{
    const add1Element = document.querySelector('#add1');
    const add2Element = document.querySelector('#add2');
    const sumElement = document.querySelector('#sum');

    let number1 = Number(add1Element.value);
    let number2 = Number(add2Element.value);

    sumElement.value = add(number1,number2);

}

document.querySelector('#addNumbers').addEventListener('click',addNumbers);

/* Function Expression - Subtract Numbers */

const subtract = function (number1, number2) 
{
    return number1 - number2;    
}

function subtractNumbers()
{
    const subtract1Element = document.querySelector('#subtract1');
    const subtract2Element = document.querySelector('#subtract2');
    const differenceElement = document.querySelector('#difference');

    let number1 = Number(subtract1Element.value);
    let number2 = Number(subtract2Element.value);

    differenceElement.value = subtract(number1,number2);

}

document.querySelector('#subtractNumbers').addEventListener('click',subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

function multiplyNumbers()
{
    const factor1Element = document.querySelector('#factor1');
    const factor2Element = document.querySelector('#factor2');
    const productElement = document.querySelector('#product');

    let number1 = Number(factor1Element.value);
    let number2 = Number(factor2Element.value);

    productElement.value = multiply(number1,number2);

}

document.querySelector('#multiplyNumbers').addEventListener('click',multiplyNumbers);


/* Open Function Use - Divide Numbers */

function divide (number1, number2)
{
    return number1 / number2;    
}

function divideNumbers()
{
    const dividendElement = document.querySelector('#dividend');
    const divisorElement = document.querySelector('#divisor');
    const quotientElement = document.querySelector('#quotient');

    let number1 = Number(dividendElement.value);
    let number2 = Number(divisorElement.value);

    quotientElement.value = divide(number1,number2);

}

document.querySelector('#divideNumbers').addEventListener('click',divideNumbers);

/* Decision Structure */

function getTotalDue()
{
    const subtotalElement = document.querySelector('#subtotal');
    const memberElement = document.querySelector('#member');
    const totalElement = document.querySelector('#total');

    let subtotal = parseFloat(subtotalElement.value);

    if (!isNaN(subtotal))
    {
        if (memberElement.checked)
        {
            totalElement.textContent = `$${(subtotal * 0.8).toFixed(2)}`;
        }
        else
        {
            totalElement.textContent = `$${subtotal.toFixed(2)}`;
        }   
    }
}

document.querySelector('#getTotal').addEventListener('click',getTotalDue);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

const arrayElement = document.querySelector('#array');
arrayElement.innerHTML = numberArray;

/* Output Odds Only Array */

let oddNumbers = numberArray.filter(number => number % 2 === 1);

const oddsElement = document.querySelector('#odds');
oddsElement.innerHTML = oddNumbers;

/* Output Evens Only Array */

let evenNumbers = numberArray.filter(number => number % 2 === 0);

const evensElement = document.querySelector('#evens');
evensElement.innerHTML = evenNumbers;

/* Output Sum of Org. Array */

let sumOfArrayNumbers = numberArray.reduce((sum,number) => sum + number);

const sumOfArrayElement = document.querySelector('#sumOfArray');
sumOfArrayElement.innerHTML = sumOfArrayNumbers;

/* Output Multiplied by 2 Array */

let multipliedArrayNumbers = numberArray.map(number => number * 2);

const multipliedElement = document.querySelector('#multiplied');
multipliedElement.innerHTML = multipliedArrayNumbers;

/* Output Sum of Multiplied by 2 Array */

let sumOfMultipliedArray = numberArray.map(number => number * 2).reduce((sum, number) => sum + number);

const sumOfMultipliedElement = document.querySelector('#sumOfMultiplied');
sumOfMultipliedElement.innerHTML = sumOfMultipliedArray;
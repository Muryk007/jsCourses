'use strict'

// Задача №2 (вывести кол-во дней в году)

let setYear = prompt ('Enter the year')

if (setYear % 400 !== 0 && setYear % 100 == 0) {
    alert ('365')
} else if (setYear % 4 == 0 || setYear % 400 == 0) {
    alert ('366')
} else {
    alert ('365')
};

// Задача №3 (среднее из трех)

let firstNumber = prompt ('Enter the first number');
let secondNumber = prompt ('Enter the second number');
let thirdNumber = prompt ('Enter the third number');

if (firstNumber == secondNumber == thirdNumber) {
    alert ('Try again')
} else {
    if (firstNumber == secondNumber || firstNumber == thirdNumber || secondNumber == thirdNumber) {
        alert ('Try again')
    } else if (firstNumber > secondNumber && firstNumber < thirdNumber) {
        alert (firstNumber)
    } else if (secondNumber > firstNumber && secondNumber < thirdNumber) {
        alert (secondNumber)
    } else if (thirdNumber > firstNumber && thirdNumber < secondNumber) {
        alert (thirdNumber)
    }
}

// Задача №4 (наибольшее из трех)

let setFirstNumber = prompt ('Enter the first number');
let setSecondNumber = prompt ('Enter the second number');
let setThirdNumber = prompt ('Enter the third number');

if (setFirstNumber == setSecondNumber == setThirdNumber) {
    alert (`${setFirstNumber}, ${setSecondNumber}, ${setThirdNumber}`) 
} else {    
    if (setFirstNumber == setSecondNumber && setFirstNumber > setThirdNumber) {
        alert (`${setFirstNumber}, ${setSecondNumber}`)
    } else if (setFirstNumber == setThirdNumber && setFirstNumber > setSecondNumber) {
        alert (`${setFirstNumber}, ${setThirdNumber}`)    
    } else if (setFirstNumber < setSecondNumber && setSecondNumber == setThirdNumber) {
        alert (`${setSecondNumber}, ${setThirdNumber}`)
    } else if (setFirstNumber > setSecondNumber && setFirstNumber > setThirdNumber) {
        alert (setFirstNumber)
    } else if (setFirstNumber < setSecondNumber && setSecondNumber > setThirdNumber) {
        alert (setSecondNumber)
    } else if (setFirstNumber < setThirdNumber && setThirdNumber > setSecondNumber) {
        alert (setThirdNumber)
    }
};

// Задача №5 (комментрарии)

//let setFirstNumber = prompt ('Enter the first number');
/*let setSecondNumber = prompt ('Enter the second number');
let setThirdNumber = prompt ('Enter the third number');

if (setFirstNumber == setSecondNumber == setThirdNumber) {
    alert (`${setFirstNumber}, ${setSecondNumber}, ${setThirdNumber}`) 
} else {    
    if (setFirstNumber == setSecondNumber && setFirstNumber > setThirdNumber) {
        alert (`${setFirstNumber}, ${setSecondNumber}`)
    } else if (setFirstNumber == setThirdNumber && setFirstNumber > setSecondNumber) {
        alert (`${setFirstNumber}, ${setThirdNumber}`)    
    } else if (setFirstNumber < setSecondNumber && setSecondNumber == setThirdNumber) {
        alert (`${setSecondNumber}, ${setThirdNumber}`)
    } else if (setFirstNumber > setSecondNumber && setFirstNumber > setThirdNumber) {
        alert (setFirstNumber)
    } else if (setFirstNumber < setSecondNumber && setSecondNumber > setThirdNumber) {
        alert (setSecondNumber)
    } else if (setFirstNumber < setThirdNumber && setThirdNumber > setSecondNumber) {
        alert (setThirdNumber)
    }
};*/



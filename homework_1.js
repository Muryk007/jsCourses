"use strict"

// Задание №0 (По 3 переменных с let, var, const)

const myFirstName = 'Oleh';
const mySecondName = 'Muratov';
const piNumber = 3.14159;

let busTicketPrice = 10;
let metroTiketPrice = 8;
let myLaptop = 'ASUS';

var sandColor =  '#f9ff33';
var dollarRate = 24.45;
var ourCountry = 'Ukraine';

// Задание №1 (Вывести нечетное число)

let firstNumber = prompt ('Введите первое число!');
let secondNumber = prompt ('Введите второе число!');

if (firstNumber % 2 !== 0 && secondNumber % 2 !== 0) {
    alert (`${firstNumber} and ${secondNumber}`) 
} else {
        if (firstNumber % 2 !== 0) {
            alert (firstNumber)
        } else if (secondNumber % 2 !== 0) {
            alert (secondNumber)
        } else {
            alert ('Try again!') // Можно было еще вставить проверку на нечисло
        }
}

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



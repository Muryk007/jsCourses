"use strict"

// Ex 1
//1
function mathOne (firstNum, secondNum) {
    firstNum = +prompt ('Enter first number');
    secondNum = +prompt ('Enter second number');
    alert (firstNum - secondNum);
}
mathOne ();
//2
function mathTwo (numFirst) {
    numFirst = +prompt ('Enter first number');
    numSecond = numFirst*numFirst;
    alert (numSecond);
}
mathTwo ();
//3
function count () {
    firstNum = +prompt ('Enter first number');
    secondNum = +prompt ('Enter second number');
}
count ();

function mathTree (count) {
    first = prompt ('Enter the number');
    second = count + first;
    alert(typeof second);
}
mathTree ();
//4
function division (div1, div2) {
    div1 = +prompt ('Enter first number');
    div2 = +prompt ('Enter second number');
    return (div1 / div2);
}
division ();


// Ex 2
//1
let myName = prompt ('Enter your name'); 

function nameConsole () {
    console.log (myName);
}
nameConsole ();
//2
let nameAle = prompt ('Enter your name');

function nameAlert () {
    alert (nameAle);
}
nameAlert ();
//3
let firstName = prompt ('Enter your name')

function nameConsAlert () {
    console.log (firstName);
    alert (firstName);
}
nameConsAlert ();

// Ex 3
//1
function countNotEvenNumbers () {
    let nums = prompt ("number?");
    let sumChi = 0;

    for (let value of nums) {
        let temp = Number (value);
        if (temp%2 != 0) {
            sumChi +=temp
        }
    } alert (sumChi);

}
countNotEvenNumbers ();

//2

//3

//4
let firstNum = 10;
let secondNum = 5;
let thirdNum = 8.25;

function findMaxNum () {

    if (firstNum > secondNum && firstNum > thirdNum) {
        alert (firstNum)
    } else if (secondNum > firstNum && secondNum > thirdNum) {
        alert (secondNum)
    } else if (thirdNum > firstNum && thirdNum > secondNum) {
        alert (thirdNum)
    } else {
        alert ('try again')
    }
}
findMaxNum ();

//5
let minNum = 1;
let notMin = 2;
let midleNum = 3;
let bigNum = 4;
let biggestNum = 5;

function findMinNum () {

    if (minNum > notMin && minNum > midleNum && minNum > bigNum && minNum > biggestNum) {
        alert (minNum)
    } else if (notMin > minNum && notMin > midleNum && notMin > bigNum && notMin > biggestNum) {
        alert (notMin)
    } else if (midleNum > minNum && midleNum > notMin && midleNum > bigNum && midleNum > biggestNum) {
        alert (midleNum)
    } else if (bigNum > minNum && bigNum > notMin && bigNum > midleNum && bigNum > biggestNum) {
        alert (bigNum)
    } else if (biggestNum > minNum && biggestNum > notMin && biggestNum > midleNum && biggestNum > bigNum) {
        alert (biggestNum)
    } else {
        alert ('try again')
    }
}
findMinNum ();

//6 
function typeTipeData () {
    alert (typeof true);
    alert (typeof 123);
    alert (typeof 'hello');
    alert (typeof null);
    alert (typeof undefined);
    alert (typeof Object);
}
typeTipeData ();

//7
function getDay () {
    let dayOfWeek = prompt ('Введите номер дня недели');
    
    if (dayOfWeek == 1) {
        alert ('Понедельник')
    } else if (dayOfWeek == 2) {
        alert ('Вторник')
    } else if (dayOfWeek == 3) {
        alert ('Среда')
    } else if (dayOfWeek == 4) {
        alert ('Четверг')
    } else if (dayOfWeek == 5) {
        alert ('Пятница')
    } else if (dayOfWeek == 6) {
        alert ('Суббота')
    } else if (dayOfWeek == 7) {
        alert ('Воскресенье')
    } else {
        alert ('Вы уверены?')
    }
}
getDay ();

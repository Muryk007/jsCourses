"use strict"

// Ex 1
//1
function subtraction (firstNum, secondNum) {
    firstNum = +prompt ('Enter first number');
    secondNum = +prompt ('Enter second number');
    alert (firstNum - secondNum);
    return;
}
subtraction ();
//2
function multiplication (numFirst) {
    numFirst = +prompt ('Enter first number');
    numSecond = numFirst*numFirst;
    alert (numSecond);
    return;
}
multiplication ();
//3
function addition (count) {
    second = count + count*2;
    alert(second);
    return;    
}
addition (5);
//4
function division (numOne, numTwo) {
    numOne = +prompt ('Enter first number');
    numTwo = +prompt ('Enter second number');
    return (numOne / numTwo);
}
division ();


// Ex 2
//1
let myName = prompt ('Enter your name'); 

function putNameConsole () {
    console.log (myName);
}
putNameConsole ();
//2
let nameAle = prompt ('Enter your name');

function putNameAlert () {
    alert (nameAle);
}
putNameAlert ();
//3
let firstName = prompt ('Enter your name')

function putNameConsAlert () {
    console.log (firstName);
    alert (firstName);
}
putNameConsAlert ();

// Ex 3
//1
function countNotEvenNumbers () {
    let nums = prompt ("number?");
    let sum = 0;

    for (let value of nums) {
        let temp = Number (value);
        if (temp%2 != 0) {
            sum +=temp
        }
    } alert (sum);

}
countNotEvenNumbers ();

//2
function findMaxEvenNumber () {
    let inputNumber = prompt ('');
    let maxEven = 0;

    for (let value of inputNumber) {
        let temp = Number (value);
        if (temp % 2 == 0) {
            maxEven = temp
        }
    } alert (maxEven);
}
findMaxEvenNumber ();
//3
function findLastNumber (lastNum) {
    lastNum = lastNum % 10;
    alert (lastNum);
}
findLastNumber (456);
//4
function findMaxNum (firstNum,secondNum,thirdNum) {

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
findMaxNum (5,2,20);

//5
function findMinNum (minNum,notMin,midleNum,bigNum,biggestNum) {

    if (minNum < notMin && minNum < midleNum && minNum < bigNum && minNum < biggestNum) {
        alert (minNum)
    } else if (notMin < minNum && notMin < midleNum && notMin < bigNum && notMin < biggestNum) {
        alert (notMin)
    } else if (midleNum < minNum && midleNum < notMin && midleNum < bigNum && midleNum < biggestNum) {
        alert (midleNum)
    } else if (bigNum < minNum && bigNum < notMin && bigNum < midleNum && bigNum < biggestNum) {
        alert (bigNum)
    } else if (biggestNum < minNum && biggestNum < notMin && biggestNum < midleNum && biggestNum < bigNum) {
        alert (biggestNum)
    } else {
        alert ('try again')
    }
}
findMinNum (1,2,3,4,5);

//6 
function typeTypeData (data) {
    alert (typeof data);
}

typeTypeData (123);
typeTypeData (true);
typeTypeData ('123');
typeTypeData (Object);
typeTypeData (NaN);
typeTypeData (Array);
typeTypeData (undefined);


//7
function getDayOfWeek (day) {
        
    if (day == 1) {
        alert ('Понедельник')
    } else if (day == 2) {
        alert ('Вторник')
    } else if (day == 3) {
        alert ('Среда')
    } else if (day == 4) {
        alert ('Четверг')
    } else if (day == 5) {
        alert ('Пятница')
    } else if (day == 6) {
        alert ('Суббота')
    } else if (day == 7) {
        alert ('Воскресенье')
    } else {
        alert ('Вы уверены?')
    }
    
}
function putDay (callback) {
    let day = prompt ('Введите номер дня недели');
    callback (day);
    
}
putDay (getDayOfWeek);

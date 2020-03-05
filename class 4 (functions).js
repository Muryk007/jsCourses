'use  strict'

function sum (num1, num2) {
    return num1+num2;
};

console.log (sum (55,25));

function umnoz (num1, num2, num3) {
    return num1*num2*num3;
};

console.log (umnoz (6,2,3));

/*let data = prompt ('Fill me');

function hello (name) {
     return name
};
alert (`Hello ${name}`);*/


/*let userAge = prompt ('Enter your age');

function isAdult () {
    if (isNaN(userAge)) {
        alert ('Enter only numbers')
    } else if (userAge < 18) {
        alert ('You are too yong')
    } else {
        alert ('You are IN')
    }
}
isAdult ();*/

/*let defaultNumber = 15;
let firstNumber = prompt ('');
let secondNumber = prompt ('');

function minus () {
    let itog = firstNumber-secondNumber-defaultNumber;
    alert (itog);
}
minus ();*/

/*let numFirst = 50;
let numSecond = 100;

function countNumbers (numOne, numTwo) {
    for (numOne; numOne < numTwo; numOne++)
    console.log (numOne);
}

countNumbers (numFirst,numSecond);*/

/*function vivodAlert () {
    alert ('YO!')
}
vivodAlert ();

function vivodConsoleLog () {
    console.log ('YO!')
}
vivodConsoleLog ();

function vivodAlertConsole () {
    alert ('YoYo!')
    console.log ('YoYo')
}
vivodAlertConsole ();*/

/*function vivodZnaceniya () {
    let znachenie = prompt ('');
    alert (typeof znachenie);
}
vivodZnaceniya ();*/

/*let func = function () {
    alert ('Hello');
}

func (); */

function sumPut (a,b) {
    return (a+b);
}


function namePut (num3, num4, summm) {
    let result = summm(num3,num4);
    return result+100;
    

}
namePut (35,25,sumPut);


/*function greeting(name) {
    alert('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
  }
  
  processUserInput(greeting);*/

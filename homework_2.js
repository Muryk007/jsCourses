"use strict"

// Ex #0

let button = document.getElementById("button");
let inpDate = document.getElementById("inpDate");
   
let table = document.getElementById("table");
let cells = table.getElementsByTagName("td");

    /*cells.onclick = function () {
        getCell = cell.value;
        if (getCell == '1') {
            alert ("dsee")
        };
    };*/

button.onclick = function () {
    let getInput = inpDate.value;
    if (getInput =='29' || getInput == '28' || getInput == '27' || getInput == '26' || getInput == '25') {
        alert ("Сходить в магаз: Спички, Мыло") 
    } else if (getInput == '24' || getInput == '1' || getInput == '3' || getInput == '5' || getInput == '7' || getInput == '9') {
        alert ("Спортзал, Пробежка и на работу")
    } else if (getInput == '2' || getInput == '4' || getInput == '6' || getInput == '8' || getInput == '10' || getInput == '12') {
        alert ("Опять магаз: Яйца, Вода 5л, Курица")
    } else if (getInput == '11' || getInput == '13' || getInput == '15' || getInput == '17' || getInput == '19' || getInput == '21') {
        alert ("Сегодня отдыхаем")
    } else if (getInput == '14' || getInput == '16' || getInput == '18' || getInput == '20' || getInput == '22') {
        alert ("Футбол, Баня, Вечером к друзьям")
    } else if (getInput == '23' || getInput == '31') {
        alert ("Опять магаз: Яйца, Вода 5л, Курица. Хлеб, Молоко")
    } else if (getInput == '30') {
        alert ("Велосипед, Спорзал, Друзья")
    } else {
        alert ("Нет таких дней в этом месяце")
    }
};

// Ex #1
let inpCode = document.getElementById ('code');
let putCode = document.getElementById ('putCode');

putCode.onclick = function () {
    let getCode = inpCode.value;
    if (getCode == '905') {
        alert ('10/мин. стоит'+' '+ 4.15*10 +'грн.')
    } else if (getCode == '194') {
        alert ('10/мин. стоит'+' '+ 1.98*10 +'грн.')
    } else if (getCode == '491') {
        alert ('10/мин. стоит'+' '+ 2.69*10 +'грн.')
    } else if (getCode == '800') {
        alert ('10/мин. стоит'+' '+ 5.00*10 +'грн.')
    } else {
        alert ('Доступные коды городов: 905, 194, 491, 800') 
    }
};

// Ex #2 
let quoter = document.getElementById ('quoter');
let putNumber = document.getElementById ('putNumber');

putNumber.onclick = function () {
    let $min = quoter.value;
    if (isNaN($min) || $min == '') {
        alert ('Введите число от 0 до 59')
    } else if ($min  == 0 || $min <= 14) {
        alert ('Число относится к 1й четверти')
    } else if ($min == 15 || $min <= 29) {
        alert ('Число относится к 2й четверти')
    } else if ($min == 30 || $min <= 44) {
        alert ('Число относится к 3й четверти')
    } else if ($min == 45 || $min <= 59) {
        alert ('Число относится к 4й четверти')
    }
};    

// Ex #3
let inpValue = document.getElementById ('inpValue');
let confValue = document.getElementById ('confValue');

confValue.onclick = function () {
    let num = inpValue.value;
    if (num == '4') {
        alert ('Winter')
    } else if (num == '3') {
        alert ('Spring')
    } else if (num == '2') {
       alert ('Summer')
    } else if (num == '1') {
       alert ('Autumn')
    } else {
       alert ('Input value from 1 to 4')
    }
};

// Ex # 4
let inpHight = document.getElementById ('inpHight');
let inpWidth = document.getElementById ('inpWidth');
let proccess = document.getElementById ('proccess');

proccess.onclick = function () {
    let hight = inpHight.value;
    let width = inpWidth.value;
    let square = (hight*width);
    if (isNaN(hight) || isNaN(width)) {
        alert ('Допускаются только числа')
    } else {
        alert (`Площадь равна  ${square}`);
    }
};

// Ex #4 - 1
let hightCl = document.getElementById ('hightCl');
let diamCl = document.getElementById ('diamCl');
let procCl = document.getElementById ('procCl');

procCl.onclick = function () {
    let hight = hightCl.value;
    let diam = diamCl.value;
    let radCl = (diam/2);
    let pi = (3.14);
    let doubleRad = (Math.pow (radCl, 2));
    let obCl = (pi*doubleRad*hight);
    
    if (isNaN(hight) || isNaN(diam)) {
       alert ('Допускаются только числа')
    } else {
       alert (`Обьем равен  ${obCl}`)
    }
};

// Ex #4 - 2
let katetOne = document.getElementById ('katetOne');
let katetTwo = document.getElementById ('katetTwo');
let gipoten = document.getElementById ('gipoten');

gipoten.onclick = function () {
    let squareKetetOne = (Math.pow (katetOne.value, 2));
    let squareKatetTwo = (Math.pow (katetTwo.value, 2));
    let squareGipoten = (squareKatetTwo+squareKetetOne);

    if (isNaN(squareKetetOne) || isNaN(squareKatetTwo)) {
        alert ('Вводите только числа')
    } else {   
        alert ((Math.sqrt(squareGipoten)).toFixed(2))
    }
};

//Ex #4 - 4
let kredit = document.getElementById ('kredit');
let percents = document.getElementById ('percents');
let years = document.getElementById ('years');
let proschet = document.getElementById ('proschet');

proschet.onclick = function () {
    let percKredit = (percents.value/100);
    let allYears = ((Number(kredit.value)+(Number(kredit.value)*Number(percKredit)*Number(years.value))));
    let perplata = (allYears-Number(kredit.value));

    if (isNaN(percKredit) || isNaN(allYears)) {
        alert ('Вводите только числа')
    } else {
        alert (perplata)
    }
};

// Ex #5 - 1
let butCicle = document.getElementById('cicle');
butCicle.onclick = function () {
    let i=45;
    let outPut = ('');
    while (i<68) {
        console.log (outPut+i);
        i++;
    }
};

//Ex # 5 - 2
let butCicle2 = document.getElementById('cicle2');
butCicle2.onclick = function () {
    let i = 45;
    let outPut2 = ('');
    while (i <= 670) {  
        outPut2 = (i % 10 == 0);
        console.log(outPut2);
        i++;
    }
};

//Ex #6
let chislo = document.getElementById ('chislo');
let summaChisel = document.getElementById ('summaChisel');

summaChisel.onclick = function () {
    let nums = chislo.value
    let sumChi = 0;

    for (let value of nums) {
        let temp = Number (value);
        if (temp%2 == 0) {
            sumChi +=temp
        }
    } alert (sumChi);
};

//Ex #7
    let culcNumOne = document.getElementById ('culcNumOne');
    let culcSimbol = document.getElementById ('culcSimbol');
    let culcNumTwo = document.getElementById ('culcNumTwo');
    let culculate = document.getElementById ('culculate');
    let result = document.getElementById ('result');

    culculate.onclick = function () {
        let getFirstNum = culcNumOne.value;
        let getSecondNum = culcNumTwo.value;
        let simbol = culcSimbol.value;
      
        if (isNaN(getFirstNum) || isNaN(getSecondNum)) {
            alert ('Вводите числа')
        } else if (simbol == '+' ) {
            result.value = +getFirstNum + +getSecondNum;
        } else if (simbol == '-' ) {
            result.value = +getFirstNum - +getSecondNum;
        } else if (simbol == '/' ) {
            if (getFirstNum == '0' || getSecondNum == '0') {
                alert ('На ноль делить нельзя');
            }
            result.value = +getFirstNum / +getSecondNum;
        } else if (simbol == '*' ) {
            result.value = +getFirstNum * +getSecondNum;
        } else {
            alert ('Введите математическую операцию')
        }
    };

// Ex #8
    let chis = document.getElementById ('chis');
    let summaChis = document.getElementById ('summaChis');

    summaChis.onclick = function () {
        let numb = chis.value
        let sumCh = 0;

        for (let value of numb) {
            let tempo = Number (value);
            if (tempo%2 != 0) {
                sumCh +=tempo
            }
        } alert (sumCh);
    };

// Ex #9
    let umnoz = document.getElementById ('umnoz');
    let tableUmnoz = document.getElementById ('tableUmnoz');
    

    tableUmnoz.onclick = function () {
        let mnozitel = umnoz.value;
        let itog = ('');
        for (let i = 1; i<=10; i++) {
            itog = itog+mnozitel+ '*' +i+ '=' +mnozitel*i +'   ';
        }
        document.getElementById ('otvet').innerHTML=itog;
    };

// Ex #10
    let anyNum = document.getElementById ('anyNum');
    let countAnyNum = document.getElementById ('countAnyNum');

    countAnyNum.onclick = function () {
        let sumAnyNum = 0;
        for (let i=1; i<=anyNum.value; i++ ) {
        sumAnyNum = sumAnyNum + i;
        } alert (sumAnyNum)
    };

//Ex #11
    let knopka = document.getElementById ('knopka');
      
    for (let i=0; i<3; i++) {
        knopka.onclick = function () {
            let otgadka = prompt ('Введите ответ');
            if (otgadka.value = 'Сдаюсь') break;
            if (otgadka.value = "Троллейбус") {
            alert ('Это провильный овет')
            } else  {
                alert ('Подумайте еще');
            }
        }
        if (i == 3) break;
    };  

// Ex #12


// Ex #13
    let facNum = document.getElementById ('facNum');
    let proccessNum = document.getElementById ('proccessNum');

    proccessNum.onclick = function () {
        let factorial = 1;
        for (let i=1; i<=facNum.value; i++) {
            factorial = factorial*i;
        }
        alert (factorial);
    };

// Ex #14
    let numStepen = document.getElementById ('numStepen');
    let proccessStepen = document.getElementById ('proccessStepen');

    proccessStepen.onclick = function () {
        let numIn = numStepen.value;
        for (let i=1; i<10; i++) {
            numIn = numIn * numStepen.value;
        } 
        alert (numIn);
    };
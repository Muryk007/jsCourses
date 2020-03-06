"use strict"

// Ex #
window.onload = function () {
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
};
'use strict'

let race = prompt ('wqeq','human');
let newUser = {
    name: 'Ivan',
    surname: 'Ivanov',
    [race]: human,
}

delete newUser.surname;
console.log (newUser);
alert(newUser.WoW);


let user = {
    kids: {
        firstKid: {
            name: 'karl',
            age: 25,
            favoriteFilms: ['MMM', 'VVV','ddd'],
        },
        secondKid: {
            name: 'Marks',
            age: 30,
            favoriteFilms: ['eee', 'rrr','ggg'],
        },
    }
}
let key = "age";
//alert (key in user.kids.firstKid);
for (let key in user.kids.firstKid)
alert (key);
console.log(user.kids.favoriteFilms);


let arr = [1,2,3,4,5,6,7,8,9];
arr.forEach
function getOne (ourArray) {
    ourArray.push ('111');
    return ourArray;
}

function getTwo (ourArray) {
    ourArray.forEach(function(elem){
        console.log (elem);
    })
}

getOne (arr);
getTwo (arr);

let userPrem = {
    name: 'John',
}

let perm1 = {
    canEdit: true,
}

let perm2 = {
    canView: false,
}

Object.assign (userPrem, perm1, perm2);
console.log (userPrem);

let str = 'Hello';
console.log (str[3]);
console.log (str.length);

let str2 = 'World is mine';
//let str3 =  str2.slice (2,6);
//console.log (str3);
str2.repeat (3);
console.log ( str2.charAt(1));
console.log (str2.includes('mine'));
console.log (str2.concat(' World'));
//console.log (str2.trim("is"));
console.log(str2.split(5));

console.log(str2.toLocaleUpperCase());

let str4 = prompt ('Fill me');
if (str4 != str4.toUpperCase()) {
    alert ('lower case');
} else if (str4 != str4.toLowerCase()) {
    alert ('UPPER CASE');
} 

let str6 = " lorem ipsum lorem ";
console.log (str6.padEnd(30, 'lol'));
console.log (str6.trimRight());
console.log (str6.substring(5, 8));

function limitStr (str, n) {
    if (str6.length() > n){
        alert ('Too much')
    }
}




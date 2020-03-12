'use strict'



for (i=0; i<3; i++) {
    let question = +prompt ('');

    switch (question) {
        case 1: 
            alert ('Понедельник');
            break;
        case 2: 
            alert ('Вторник'); 
            break;   
        case 3: 
            alert ('Среда');
            break;    
        default: "No";
    }

}

for (i=1; i<=3; i++) {
    alert (i)
}

let user = {
    name: "Oleh" ,
    surname: "Muratov" ,
    getName:function () {
        return this.name;
    },
    getSurname () {
        return this.surname;
    }
}

console.log (user.name);
console.log (user.getName())



Math.max ();
console.log (Math)

let date = new Date ();
console.log(date.getFullYear)

let math = {
    Pi: 3.14 ,
    Name: "circle" ,
    Diam: 8 ,
    Radius: 4 ,
    Creator: "human" ,
    
    squareCicle:function () {
        return this.Pi*this.Radius
       
    } ,
    minus:function () {
        return this.Diam - this.Radius
    } ,
    plus:function () {
        let pl = this.Pi+this.Diam+this.Radius
        return pl
    }

}
console.log (math.squareCicle());
console.log (math.minus());
console.log (math.plus());

function getGum() {
    let gum = "Turbo";
    return gum
}

getGum ('BomBiBom', 123, 'Love Is');
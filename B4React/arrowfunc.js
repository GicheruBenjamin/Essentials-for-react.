//Func declaration

function eat(food){
    console.log("I am eating " + food);
}
eat("Fillet Mignon");

//Func expression

const drink = 'Water';

function quench(drink){
    console.log("I am quenching my thirst with " + drink);
}
quench(drink);

//function written as an arrow function 
let quench = (drink) => {
    console.log("I am quenching my thirst with " + drink);
}
quench(' a Soda')
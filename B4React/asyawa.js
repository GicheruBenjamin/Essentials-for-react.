
//Synchronous code 

let a = 1;
let b = "Jena"
function myFunc() {
    a = 2;
    b = "Jenny"
    console.log(a);
    console.log(b);
}

async function myAsyncFunc() {
    let a = 2; 
    let b = "Cole"; 
    console.log(a);
    console.log(b);
}

async function myAsyncfunc2() {
    await new Promise(resolve => setTimeout(resolve, 10000)); 
    let a = 2; 
    let b = "Cole"; 
    console.log(a + " " + b); 
}

// Call the async functions
myAsyncFunc();
myAsyncfunc2();



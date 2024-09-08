console.log("Hi functions:)");


// // function -> function statement
function fn(a) {
    console.log("i am a fn ", a);
    return "kumar";
}

// -> fn please execute your code
// const rVal=fn("hello");
// console.log("rVal", rVal);
const anotherVar =fn("pinkesh");
// const rVal=anotherVar("something");
// console.log("rVal",rVal);
const rVal = fn("hello");
console.log("anotherVar",anotherVar)
console.log("pinkesh", rVal);
// anotherVar("something");

// // // function expression
const refFunction = function (hy) {
    console.log("Hello i am function",hy);
}

refFunction("hello");


// // function -> arrow function
const arrowFn = (helloParam) => {
    console.log("Hello I am arrow function",helloParam);
}
arrowFn("hello");


// IIFE -> immediatley invoked function expression
(function(a){
    console.log("I am function expression",a);
})
("hello");




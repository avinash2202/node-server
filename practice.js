

// function
//1. void function - no return type

function multiply2x6() {
    var a = 2;
    var b = 6;
    var c = a*b;
    console.log(c);
}

multiply2x6();

// 2. Void with param
function multiply(num1, num2) {
    var c = num1 * num2;
    console.log(c);
}
multiply(2, 6);
multiply(3, 9);

// 3. Return without param
function greetHello() {
    return "Hello!";
}
var greet = greetHello();
console.log(greet);

// 4. return with param
function getNameWithGreet(greet, name) {
    return greet + " " + name;
}
var nameWithGreet = getNameWithGreet(greet, "Ashutosh");
console.log(nameWithGreet);
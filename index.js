// Follow along with the examples here
function doNothing() {}

function sayHello() {
    console.log('Hello!');
  } 
  sayHello();

  function sayHelloToIsabel() {
    console.log("Hello, Isabel!");
  }
  sayHelloToIsabel();

  function sayHelloToSofia() {
    console.log("Hello, Sofia!");
  } 
  sayHelloToSofia();

  function sayHelloToBrendan() {
    console.log("Hello, Brendan!");
  } 
  sayHelloToBrendan();

  function sayHelloTo(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  
  sayHelloTo("Hello", "Amma");


  function add(x, y) {
    return x + y;
  } 
  console.log(add(1, 2));


  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log('I was called!');
  } 
  console.log(say("Howdy", "partner"));


function multiplication(x, y) {
    return x*y;
    console.log(55);
}
console.log(multiplication(50, 340));

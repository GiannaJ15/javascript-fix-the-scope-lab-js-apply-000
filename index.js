var animal = 'dog'

function myAnimal() {
  return animal
  
}

function yourAnimal() {
  var animal = "cat" // local variable overrides the global variable
  return animal
}

function add2(n) {
  return n + two

  // Feel free to move things around!
  const two = 2
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()() //the first set of parenthesis invokes the first function and then the second set of parenthesis invokes the second function (diggin)--- setting the variable "theFunk" to the RETURN value of the funkyFunction -- step by step no jumping


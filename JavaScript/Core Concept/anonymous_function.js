function greeting() {
  console.log("Hello I'm here.");
}
console.log("Before");
setTimeout(greeting,2000);
console.log("After");


console.log("Before");
setTimeout(function() {
  console.log("Hello I'm here.");
}, 2000);
console.log("After");


const multiply = function(a,b) {
  return a*b;
}
console.log(multiply(1,3));
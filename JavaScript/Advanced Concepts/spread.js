// let arr = [1,2,3];
// let arr2 = [arr];
// console.log(arr);
// console.log(arr2);
// arr2 = [...arr,4,5];
// console.log(arr2);


let sum = function(a,b,c) {
  return a+b+c;
}

let arr = [1,2,3];
console.log(sum(...arr));
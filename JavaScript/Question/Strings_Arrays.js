// Question 11
// function reverseString(str) {
//   let reversed = "";
//   for(let i=str.length-1; i>=0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }
// console.log(reverseString("java"));


// Question 12
// function isPalindrome(str) {
//   str = str.toLowerCase();
//   let start=0, end=str.length-1;
//   while(start < end) {
//     if(str.charAt(start) != str.charAt(end)) return false;
//     start++, end--;
//   }
//   return true;
// }
// console.log(isPalindrome('madaM'));


// Question 13
// function countCharacters(str) {
//   let characterCounter = {};
//   for(let chr of str) {
//     if(characterCounter[chr]) {
//       characterCounter[chr]++;
//     } else {
//       characterCounter[chr] = 1;
//     }
//   }
//   return characterCounter;
// }
// console.log(countCharacters("javascript"));


// Question 14
// function countVowels(str) {
//   let vowels = 'aeiouAEIOU';
//   let count = 0;
//   for(let chr of str) {
//     if(vowels.includes(chr)) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countVowels("JavaScript"));


// Question 15
// let arr = [12,14,25,13,22];
// let maxVal = -Infinity;
// for(let i=0; i<arr.length; i++) {
//   if(maxVal < arr[i]) {
//     maxVal = arr[i];
//   }
// }
// console.log(maxVal);


// Question 16
// let arr = [1, 2, 2, 3, 4, 4, 5];
// let set = new Set();
// for(let i=0; i<arr.length; i++) {
//   set.add(arr[i]);
// }
// console.log(set);

// let arr = [1, 2, 2, 3, 4, 4, 5];
// let set = new Set(arr);
// console.log(set);


// Question 17
// let arr = [10, 20, 5, 40, 30];
// let largest = 10;
// let secondLargest = -Infinity;
// for(let i=1; i<arr.length; i++) {
//   if(largest < arr[i]) {
//     secondLargest = largest;
//     largest = arr[i];
//   } else if(secondLargest < arr[i]) {
//     secondLargest = arr[i];
//   }
// }
// console.log(secondLargest);


// Question 18******************************************
// function sumArray(arr) {
//   let sum = 0;
// for(let i=0; i<arr.length; i++) {
//   sum += arr[i];
// }
//   arr.forEach(elm => sum+=elm);
//   return sum;
// }

// function sumArray(arr) {
//   return arr.reduce((acc, num) => acc + num, 0);
// }
// console.log(sumArray([10, 20, 30, 40]));


// Question 19
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let evenNumbers = arr.filter(num => num % 2 === 0);
// console.log(evenNumbers); 


// Question 20
// const products = [
//     { name: "Laptop", price: 80000 },
//     { name: "Mouse", price: 1000 },
//     { name: "Keyboard", price: 3000 },
//     { name: "Monitor", price: 15000 }
// ];
// const expensiveProducts = products.filter(product => product.price > 5000);
// console.log(expensiveProducts);
// Question 21
// function searchProducts(products, keyword) {
//   return products.filter(product => 
//     product.name.toLowerCase().includes(keyword.toLowerCase())
//   );
// }
// const products = [
//   { name: 'Laptop', price: 10000 },
//   { name: 'Mouse', price: 1000 },
//   { name: 'Keyboard', price: 2000 },
//   { name: 'Monitor', price: 5000 }
// ];
// console.log(searchProducts(products, "lap"));


// Question 22
// const cart = [
//   { name: "Laptop", price: 80000, quantity: 1 },
//   { name: "Mouse", price: 1000, quantity: 2 },
//   { name: "Keyboard", price: 3000, quantity: 1 }
// ];
// const totalAmount = cart.reduce((acc,item) => acc + item.price * item.quantity, 0);
// console.log(totalAmount);


// Question 23
// const employees = [
//   { name: "A", salary: 50000 },
//   { name: "B", salary: 80000 },
//   { name: "C", salary: 60000 }
// ];
// let name;
// let maxSalary = -Infinity;
// for(let i=0; i<employees.length; i++) {
//   if(employees[i].salary > maxSalary) {
//     maxSalary = employees[i].salary;
//     name = employees[i].name;
//   }
// }
// console.log(`Maximum earning employee is ${name}`);


// Question 24
// const products = [
//   { name: "iPhone", category: "mobile" },
//   { name: "Samsung", category: "mobile" },
//   { name: "Dell", category: "laptop" },
//   { name: "HP", category: "laptop" }
// ];
// const grouped = products.reduce((acc,product) => {
//   if(!acc[product.category]) {
//     acc[product.category] = [];
//   }
//   acc[product.category].push(product);
//   return acc;
// }, {});
// console.log(grouped);


// Question 25
// const products = [
//     { name: "Laptop", price: 80000 },
//     { name: "Mouse", price: 1000 },
//     { name: "Keyboard", price: 3000 },
//     { name: "Monitor", price: 15000 }
// ];
// // Low → High
// const lowToHigh = [...products].sort((a,b) => a.price - b.price);
// console.log(lowToHigh);
// // High → Low
// const highToLow = [...products].sort((a,b) => b.price - a.price);
// console.log(highToLow);


// Question 26
// const arr = [1, 2, 3, 2, 4, 5, 3, 6];
// const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
// const uniqueDuplicates = [...new Set(duplicates)];
// console.log(uniqueDuplicates); 


// Question 27
// const arr1 = [1, 2, 3, 4];
// const arr2 = [3, 4, 5, 6];
// const arr = arr1.filter(item => arr2.includes(item));
// console.log(arr);


// Question 28
// const arr = [1, [2, 3], [4, [5, 6]]]
// const result = arr.flat(Infinity);
// console.log(result);

// function flattenArray(arr) {
//   let result = [];
//   for (let item of arr) {
//     if (Array.isArray(item)) {
//       result = result.concat(flattenArray(item));
//     } else {
//       result.push(item);
//     }
//   }
//   return result;
// }
// const arr = [1, [2, 3], [4, [5, 6]]];
// console.log(flattenArray(arr));


// Question 29
// const response = [
//   {
//     id: 1,
//     firstName: "Rohan",
//     lastName: "Jha",
//     age: 28
//   },
//   {
//     id: 2,
//     firstName: "Rohit",
//     lastName: "Sharma",
//     age: 22
//   }
// ];
// const result = response.map(item => ({
//   id: item.id,
//   name: `${item.firstName} ${item.lastName}`
// }));
// console.log(result);


// Question 30
let cart = [];
function addToCart(product) {
  cart.push(product);
}
function removeFromCart(productName) {
  cart = cart.filter(item => item.name !== productName);
}
function updateQuantity(productName, newQuantity) {
  cart = cart.map(item =>
    item.name === productName ? { ...item, quantity: newQuantity } : item
  );
}
function calculateTotal() {
  return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
}
function clearCart() {
  cart = [];
}
addToCart({ name: "Laptop", price: 80000, quantity: 1 });
addToCart({ name: "Mouse", price: 1000, quantity: 2 });
addToCart({ name: "Keyboard", price: 3000, quantity: 1 });
console.log("Cart:", cart);
updateQuantity("Mouse", 3);
console.log("Updated Cart:", cart);
console.log("Total:", calculateTotal());
removeFromCart("Keyboard");
console.log("After Removal:", cart);
clearCart();
console.log("Cart Cleared:", cart); 
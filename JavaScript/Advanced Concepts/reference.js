let student1 = {
  name: "Rohan",
  age: 28,
  course: "Computer science"
};
let num1 = 10;
let num2 = num1;
let student2 = student1;
console.log(num2);
console.log(student2);

num1 = 15;
delete student1.age;
student1.stream = 'Science';
console.log(num2);
console.log(student2);
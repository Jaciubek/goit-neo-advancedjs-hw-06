/*
  Create a type "Gender" using a union type,
which can hold the values ​​"male", "female". Create a variable myGender of this type.
*/

type Gender = "male" | "female";
let myGender: Gender;

myGender = "male";

export {};

console.log("Task8:");
console.log("myGender:", myGender);
console.log("______________________________________");
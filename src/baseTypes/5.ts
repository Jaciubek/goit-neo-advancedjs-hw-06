/* 
How do you define a variable in TypeScript that can take a string or a number (union type)?
And similarly, define a variable that can only take one of two string values: 'enable' or 'disable' (literal type)?
*/

console.log("Task5:");
let value: string | number;
let userStatus: "enable" | "disable";

value = "Text";
console.log("value:", value);

userStatus = "enable";
console.log("userStatus:", userStatus);
console.log("______________________________________");
/*
  How do you specify the types for the arguments and return values ​​of these functions?
*/

function showMessage(message: string): void {
    console.log(message);
  }
  
  function calc(num1: number, num2: number): number {
    return num1 + num2;
  }
  
  function customError(): never {
    throw new Error("Error");
  }
  
  export {};
  
  console.log("6.ts");
  showMessage("Hello");
  console.log("calc:", calc(2, 3));
  console.log("______________________________________");
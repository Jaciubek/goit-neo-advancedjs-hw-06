/*
 There is a function getPromise() that returns a promise that is resolved to an array containing strings and numbers.
Extend this function using generics so that it returns the correct type.
*/

function getPromise(): Promise<(string | number)[]> {
    return new Promise((resolve) => {
      resolve(["Text", 50]);
    });
  }
  
  console.log("GENERICS__________________");
  console.log("Task1:");
  getPromise().then((data) => {
    console.log(data);
  });
  
  console.log("______________________________________");
  export {};
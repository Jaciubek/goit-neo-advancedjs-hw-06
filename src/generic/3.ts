/*
  You have a merge function that combines two objects.
Use generics to indicate that these objects can be of any type.
*/
console.log("3.ts");

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}

const person = { name: "Alice", age: 30 };
const job = { role: "Developer", company: "TechCorp" };

const mergedObject = merge(person, job);
console.log(mergedObject);

export {};

console.log("______________________________________");
/*
  You need to implement the KeyValuePair interface, which describes a key-value pair.
Use generics so that this interface can work with any type of key and value.
*/

console.log("5.ts");
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

let pair1: KeyValuePair<number, string> = { key: 1, value: "First" };
let pair2: KeyValuePair<string, boolean> = { key: "Second", value: true };
console.log("pair1:", pair1);
console.log("pair2:", pair2);

console.log("______________________________________");

export {};
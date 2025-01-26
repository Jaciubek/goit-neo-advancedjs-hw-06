/*
  You have a type AllType. There is a compare function that takes two objects. These objects contain AllType fields.
Your task is to use Pick and generics to indicate that the fields of these objects belong to AllType.
The compare function should return AllType.
*/
console.log("2.ts");
function compare(top, bottom) {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
}
const topObject = {
    name: "Alice",
    color: "Blue",
};
const bottomObject = {
    position: 1,
    weight: 60,
};
const result = compare(topObject, bottomObject);
console.log(result);
console.log("______________________________________");
export {};
//# sourceMappingURL=2.js.map
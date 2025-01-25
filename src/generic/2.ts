/*
  You have a type AllType. There is a compare function that takes two objects. These objects contain AllType fields.
Your task is to use Pick and generics to indicate that the fields of these objects belong to AllType.
The compare function should return AllType.
*/

console.log("2.ts");

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<
  T extends Pick<AllType, "name" | "color">,
  U extends Pick<AllType, "position" | "weight">
>(top: T, bottom: U): AllType {
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

export {};

console.log("______________________________________");
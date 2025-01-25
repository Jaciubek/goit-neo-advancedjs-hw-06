/*
  Create a function (isWeekend) that takes a day of the week (from your enum)
and returns a boolean value indicating whether it is a weekday or a weekend.
*/
console.log("t7.ts");

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: DayOfWeek): boolean {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}

const today: DayOfWeek = DayOfWeek.Monday;

console.log(`Is Monday a weekend? ${isWeekend(today)}`);
console.log("______________________________________");
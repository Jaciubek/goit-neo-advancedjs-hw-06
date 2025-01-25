/*
  Use generics and interfaces to fix the error in the following classes:
*/
// Definicja interfejsu PageProps / PageProps Interface Definition
console.log("4.ts");
interface PageProps {
  title: string;
}

// Generyczna klasa Component / Generic Component class
class Component<T> {
  constructor(public props: T) {}
}

// Klasa Page dziedzicząca po Component z PageProps / Page class inheriting from Component with PageProps
class Page extends Component<PageProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

// Przykładowe użycie / Example use
const myPage = new Page({ title: "My Page" });
myPage.pageInfo(); // Output: Moja Strona

export {};

console.log("______________________________________");
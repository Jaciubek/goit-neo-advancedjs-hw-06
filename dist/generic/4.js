/*
  Use generics and interfaces to fix the error in the following classes:
*/
// Definicja interfejsu PageProps / PageProps Interface Definition
console.log("4.ts");
// Generyczna klasa Component / Generic Component class
class Component {
    constructor(props) {
        this.props = props;
    }
}
// Klasa Page dziedzicząca po Component z PageProps / Page class inheriting from Component with PageProps
class Page extends Component {
    pageInfo() {
        console.log(this.props.title);
    }
}
// Przykładowe użycie / Example use
const myPage = new Page({ title: "My Page" });
myPage.pageInfo(); // Output: Moja Strona
console.log("______________________________________");
export {};
//# sourceMappingURL=4.js.map
/*
  You have a Form type that contains information about the form, including the errors field.
You want to create a new Params type that includes all the fields from the Form except errors.
*/
console.log("Task8:");
// Przykładowa funkcja używająca typu Params
function createOrUpdateUser(params) {
    console.log("Tworzenie/Aktualizacja użytkownika z danymi:", params);
}
// Poprawne wywołanie funkcji z pełnymi danymi (bez 'errors')
createOrUpdateUser({
    email: "user@mail.com",
    firstName: "Jan",
    lastName: "Kowalski",
    phone: "123-456-7890",
});
console.log("______________________________________");
export {};
//# sourceMappingURL=8.js.map
/*
 You have a user registration form.
Sometimes you need to pre-populate the form with user data to update their profile.
However, you don't always need to fill in all the fields. For example, a user might want to update only their email and password,
leaving their first and last names unchanged.

Fix the type in the function argument so that there are no type errors.
*/
console.log("Task6:");
function createOrUpdateUser(initialValues) {
    const existingUser = {
        name: "Jan",
        surname: "Kowalski",
        email: "jan.kowalski@example.com",
        password: "securepassword",
    };
    const updatedUser = { ...existingUser, ...initialValues };
    console.log("Aktualizowany użytkownik:", updatedUser);
}
// Przykładowe wywołanie funkcji z częściowymi danymi
createOrUpdateUser({ email: "user@mail.com", password: "password123" });
console.log("______________________________________");
export {};
//# sourceMappingURL=6.js.map
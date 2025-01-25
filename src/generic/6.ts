/*
 You have a user registration form.
Sometimes you need to pre-populate the form with user data to update their profile.
However, you don't always need to fill in all the fields. For example, a user might want to update only their email and password,
leaving their first and last names unchanged.

Fix the type in the function argument so that there are no type errors.
*/

console.log("Task6:");

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>) {
  const existingUser: User = {
    name: "Jan",
    surname: "Kowalski",
    email: "jan.kowalski@example.com",
    password: "securepassword",
  };

  const updatedUser: User = { ...existingUser, ...initialValues };
  console.log("Aktualizowany użytkownik:", updatedUser);
}

// Przykładowe wywołanie funkcji z częściowymi danymi
createOrUpdateUser({ email: "user@mail.com", password: "password123" });

console.log("______________________________________");

export {};
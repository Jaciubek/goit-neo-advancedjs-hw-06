/*
  You have a UserRole list that is used to classify users in your application.
You want to create a RoleDescription object that maps each user role to its description.
*/
console.log("Task7:");

export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

const RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};

function getRoleDescription(role: UserRole): string {
  return RoleDescription[role];
}

function displayRoleDescription(role: UserRole): void {
  console.log(`Role: ${role}, Description: ${getRoleDescription(role)}`);
}

displayRoleDescription(UserRole.admin);

export {};

console.log("______________________________________");
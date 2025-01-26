/*
  You have a UserRole list that is used to classify users in your application.
You want to create a RoleDescription object that maps each user role to its description.
*/
console.log("Task7:");
export var UserRole;
(function (UserRole) {
    UserRole["admin"] = "admin";
    UserRole["editor"] = "editor";
    UserRole["guest"] = "guest";
})(UserRole || (UserRole = {}));
const RoleDescription = {
    [UserRole.admin]: "Admin User",
    [UserRole.editor]: "Editor User",
    [UserRole.guest]: "Guest User",
};
function getRoleDescription(role) {
    return RoleDescription[role];
}
function displayRoleDescription(role) {
    console.log(`Role: ${role}, Description: ${getRoleDescription(role)}`);
}
displayRoleDescription(UserRole.admin);
console.log("______________________________________");
//# sourceMappingURL=7.js.map
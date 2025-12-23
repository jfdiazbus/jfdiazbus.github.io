/*
** EPITECH PROJECT, 2025
** Web_development
** File description:
** main.ts
*/
var Main = /** @class */ (function () {
    function Main() {
        console.log("Hello, World!");
    }
    return Main;
}());
function greet(name) {
    return "Hello, ".concat(name, "!");
}
var newUser = {
    id: 1,
    name: "Gemini"
};
new Main();
{
    var username = "Juan-fe";
    console.log("Welcome, ".concat(username, "!"));
    console.log(greet(username));
}
;

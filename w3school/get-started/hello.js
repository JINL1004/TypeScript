var greet = function (name) {
    return "Hello, ".concat(name);
};
var message = greet("World");
console.log(message);
var greet2 = function (name) {
    return "Hello, ".concat(name, "!");
};
var message2 = greet2("World");
console.log(message2);

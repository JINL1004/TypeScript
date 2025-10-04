const greet = (name: string): string => {
  return `Hello, ${name}`;
}

const message: string = greet("World");
console.log(message);

const greet2 = (name: string): string => {
  return "Hello, ".concat(name, "!");
}

const message2: string = greet2("World");
console.log(message2);
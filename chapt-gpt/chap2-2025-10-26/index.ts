/** Funtions */

// function add(a, b) {
//   return a + b;
// }

function add(a: number, b: number): number {
  return a + b;
}

function sayHellp(name: string): void {
  console.log(`Hello, ${name}!`);
}

function greet(name: string, title?: string) {
  if (title) {
    console.log(`Hello, ${title} ${name}!`);
  } else {
    console.log(`Hello, ${name}!`);
  }
}

greet("Alice");
greet("Bob", "Sir");

/** Arrow Function */
const multiply = (x: number, y: number): number => {
  return x * y;
}

const square = (n: number): number => n * n;

/** 🧪 5. 練習時間！ */

console.log("Add: ", add(3, 5));
greet("Alice");
greet("Bob", "Dr.");
console.log("Square of 4:", square(4));
/** Explicit Type  */
const greeting: string = "Hello, TypeScript";
const userCount: number = 42;
const isLoading: boolean = true;
const scores: number[] = [100, 95, 98]; 

function greet(name: string): string {
  return `Hello, ${name}`;
}
greet('Alice');
// greet(42);

/** Base Type inference */
let username = "alice";
let score = 100;
let flags = [true, false, true];
function add(a: number, b: number) {
  return a + b;
}

/** Object Literal Inference */
const user = {
  name: "Alice",
  age: 30,
  isAdmin: true
};

console.log(user.name);
// console.log(user.email);

let username2: string = "alice";
// username2 = 42;
let score2 = 100;
// score2 = "high";

function add2(a, b) {
  return a + b;
}
console.log(add2("5", 3));

function add3(a:number, b:number): number {
  return a + b;
}
// console.log(add3("5", 3));

const data = JSON.parse(`{"name": "Alice", "age": 30}`);
let something;
something = 'hello';
something = 42;
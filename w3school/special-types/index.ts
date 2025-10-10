/** Type: any */

/** Example without any */
let u = true;
// u = "string";
// Error: Type 'string' is not assignable to type 'boolean'
// Math.round(u);
// Error: Argument of type 'boolean' is not assignable to parameter of type 'number'

/** Example with any */
let v: any = true;
v = "string";
// Math.random(v);
// Error: Expected 0 argument, but got 1.

/** Type: unknown */
let w: unknown = 1;
w = "string";
w = {
  runANonExistentMethod: () => console.log("I think therefore I am")
} as { runANonExistentMethod: () => void };

if (typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}

/** Type narrowing with unknown */
function processValue(value: unknown) {
  if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else if (Array.isArray(value)) {
    console.log(value.length);
  }
}

/** Type: never */
function throwError(message: string): never {
  throw new Error(message);
}

class Circle {
  public kind: "circle" = "circle";
  public radius: number = 10;
  constructor(radius: number) {
    this.radius = radius;
  }
}

class Square {
  public kind: "square" = "square";
  public sideLength: number = 10;
  constructor(sideLength: number) {
    this.sideLength = sideLength;
  }
}

class Triangle {
  public kind: "triangle" = "triangle";
  public sideLength: number = 10;
  constructor(sideLength: number) {
    this.sideLength = sideLength;
  }
}

type Shape = Circle | Square | Triangle;
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
  }
}

// let x: never = true;
// Error: Type 'true' is not assignable to type 'never'

/** Type: undefined & null */
let y: undefined = undefined;
let z: null = null;

function greet(name?: string) {
  return `Hello, ${name || 'stranger'}`;
}

interface User {
  name: string,
  age?: number
}
/** 🧩 第3章（上）：函式型別 Function Type */

// let add: (a: number, b: number) => number;
// add = function (x, y) {
//   return x + y;
// }
// console.log(add(3, 5));

// type MathFunc = (a: number, b: number) => number;

// const multiply: MathFunc = (a, b) => a * b;
// const divide: MathFunc = (a, b) => a / b;

/** 🧪 小練習 */

type MathFunc = (a: number, b: number) => number;

const add: MathFunc = (a, b) => a + b;
const sub: MathFunc = (a, b) => a - b;
const mul: MathFunc = (a, b) => a * b;
const div: MathFunc = (a, b) => a / b;

console.log(add(10, 3));
console.log(sub(10, 3));
console.log(mul(10, 3));
console.log(div(10, 3));

/** 🧩 第3章（下）：介面 Interface */
interface Person {
  name: string;
  age: number;
}

const user: Person = {
  name: "Alice",
  age: 25
};

/** 💬 2. 可選屬性（Optional Property） */
interface Player {
  name: string;
  level?: number;
};

const p1: Player = { name: "Bob" };
const p2: Player = { name: "Eve", level: 99 };

/** 🔐 3. 只讀屬性（readonly） */
interface Config {
  readonly appName: string;
  version: number;
};
const conf: Config = { appName: "MyApp", version: 1 };
conf.version = 2;
// conf.appName = "YourApp";

/** 🔄 4. 函式 + 介面 = 💥 超強組合 */
/** 函式簽章 method signature */
interface Calulator {
  add(a: number, b: number): number;
  sub(a: number, b: number): number;
};

const calc: Calulator = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
};

console.log(calc.add(10, 5));
console.log(calc.sub(10, 5));

/** 🧪 小練習 */
interface Animal {
  name: string,
  speak(): void,
};

const dog: Animal = {
  name: "Buddy",
  speak() {
    console.log(`${this.name}: "可愛的狗勾"`)
  },
}

dog.speak();
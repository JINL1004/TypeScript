// 🧩 一、基本函式型別定義
// 🟢 JavaScript 寫法（沒型別）

function add1(a: number, b: number): number {
  return a + b;
}
const c = add1(1, 2);
console.log(c);

// 🧩 二、型別推論 (Type Inference)

// TypeScript 會自動判斷變數或回傳值的型別。

// 範例：

function greet1(name: string) {
  return "Hello, " + name;
}

const greet_ans = greet1("皮卡丘");
console.log(greet_ans);

// 🧩 三、箭頭函式的型別

const multiply = (x: number, y: number): number => {
  return x * y;
}
const multiply_ans = multiply(5, 3);
console.log(multiply_ans);

const multiply2 = (x: number, y: number) => x * y;
const multiply2_ans = multiply2(8, 9);
console.log(multiply2_ans);

function printMessage(msg: string): void {
  console.log(msg);
}

// ===========================================================================

/**
🧠 練習題（Lesson 3）

請你完成以下三題 TypeScript 程式：

1️⃣ 寫一個函式 add，接收兩個 number，回傳它們的和。
2️⃣ 寫一個函式 greet，接收一個 string 名字，回傳 "Hello, 名字"。
3️⃣ 寫一個函式 average，接收一個 number[]，回傳平均值。

 */

const add = (x: number, y: number) => x + y;
const greet = (name: string) => `Hello, ${name}`;
const average = (numbers: number[]) => numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length;
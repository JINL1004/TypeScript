// interface 是用來描述物件的結構（shape）。

// 🟢 沒用 interface 的寫法：
let student0: { name: string, age: number, scores: number[] } = {
  name: "TOM",
  age: 18,
  scores: [10, 20, 30]
};

// 🟢 用 interface 的寫法（更乾淨）：
interface Student1 {
  name: string;
  age: number;
  scores: number[];
}

interface Student1 {
  name: string,
  age: number,
  scores: number[],
}

// ------------------------------------------------------------------

// 🧩 二、選用屬性 (Optional Property)

// 有時候物件不一定要有全部屬性，用 ? 表示「可有可無」。

interface User {
  name: string;
  age?: number;
}

let u1: User = { name: "Alice" };
let u2: User = { name: "Bob", age: 25 }

// ------------------------------------------------------------------
// 🧩 三、唯讀屬性 (Readonly Property)

// 用 readonly 表示「建立後不能修改」。

interface Config {
  readonly id: number;
  name: string;
}

let conf: Config = { id: 1, name: "Setting A" };
conf.name = "Setting B";
// conf.id = 2;

// ------------------------------------------------------------------
// 🧩 四、物件內含函式

// 物件也可以有函式型別屬性：

interface Calculator {
  add(x: number, y: number): number;
  subtract(x: number, y: number): number;
}

let calc: Calculator = {
  add(x, y) {
    return x + y;
  },
  subtract(x, y) {
    return x - y;
  },
}

// ------------------------------------------------------------------

/*
🧠 練習題（Lesson 4）

請你完成以下題目（都放在同一個檔案裡）：

📝 題目：

*/
/*
1️⃣ 宣告一個 interface Student，包含：
{
  id: number;
  name: string;
  scores: number[];
  isGraduated?: boolean; // 可選屬性
}
*/
interface Student {
  id: number;
  name: string;
  scores: number[];
  isGraduated?: boolean;
}

/*
2️⃣ 建立一個變數 student1，型別是 Student，內容如下：
{
  id: 1,
  name: "Amy",
  scores: [88, 92, 95],
}
*/

const student1: Student = {
  id: 1,
  name: "Amy",
  scores: [88, 92, 95]
}

/*
3️⃣ 寫一個函式 printStudent，接收一個 Student，並印出：
學生姓名：Amy
平均成績：91.6666667
是否畢業：未畢業
*/

const printStudent = (student: Student) => {
  console.log(`學生姓名：${student.name}`);
  console.log(`平均成績：${student.scores.reduce((acc, cur) => acc + cur, 0) / student.scores.length}`);
  console.log(`是否畢業：${student.isGraduated ? "已畢業" : "未畢業"}`);
}

printStudent(student1);
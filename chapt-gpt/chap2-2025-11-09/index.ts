// 範例
let name: string = "Alice";
let age: number = 25;
let isStudent: boolean = true;

let scores1: number[] = [90, 85, 100];
let user: { name: string, age: number } = {
  name: "Bob",
  age: 30
}

// ---------------------------------------------------------------------------------------

/*
🧠 練習題（Lesson 2）

請你完成下面題目：

📝 題目：

1️⃣ 宣告一個變數 username，型別是 string，值為 "Tom"
2️⃣ 宣告一個變數 height，型別是 number，值為 180
3️⃣ 宣告一個變數 isMember，型別是 boolean，值為 false
4️⃣ 宣告一個陣列 scores，內容為 [88, 92, 76]
5️⃣ 宣告一個物件 student，有屬性：
{
  name: string;
  age: number;
  scores: number[];
}
  然後把前面的變數組合進去。
*/

let username: string = "Tom";
let height: number = 180;
let isMember: boolean = false;
let scores: number[] = [88, 92, 76];
let student: { name: string, age: number, scores: number[] } = {
  name: username,
  age: height,
  scores: scores
};
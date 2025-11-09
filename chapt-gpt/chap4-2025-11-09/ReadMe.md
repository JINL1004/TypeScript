# Lesson 4：介面與物件型別（Interface & Object Types）

**🎯 Lesson 4 目標**

學會：
1️⃣ 使用 interface 來定義物件型別
2️⃣ 理解選用屬性、唯讀屬性
3️⃣ 練習建立複雜型別結構

---

**🧩 一、什麼是 interface**

interface 是用來**描述物件的結構（shape）**。

**🟢 沒用 interface 的寫法：**

```ts
let student: { name: string; age: number; scores: number[] } = {
  name: 'Tom',
  age: 18,
  scores: [90, 80, 70],
}
```

**🟢 用 interface 的寫法（更乾淨）：**

```ts
interface Student {
  name: string
  age: number
  scores: number[]
}

let student: Student = {
  name: 'Tom',
  age: 18,
  scores: [90, 80, 70],
}
```

---

**🧩 二、選用屬性 (Optional Property)**
有時候物件不一定要有全部屬性，用 ? 表示「可有可無」。

```ts
interface User {
  name: string
  age?: number // 選用
}

let u1: User = { name: 'Alice' }
let u2: User = { name: 'Bob', age: 25 }
```

---

**🧩 三、唯讀屬性 (Readonly Property)**
用 readonly 表示「建立後不能修改」。

```ts
interface Config {
  readonly id: number
  name: string
}

let conf: Config = { id: 1, name: 'Setting A' }
conf.name = 'Setting B' // ✅ OK
// conf.id = 2; ❌ 錯誤：不能修改 readonly 屬性
```

---

**🧩 四、物件內含函式**
物件也可以有函式型別屬性：

```ts
interface Calculator {
  add(x: number, y: number): number
  subtract(x: number, y: number): number
}

let calc: Calculator = {
  add(x, y) {
    return x + y
  },
  subtract(x, y) {
    return x - y
  },
}
```

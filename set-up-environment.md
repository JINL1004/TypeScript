# 建置 環境

---

## Step1: 安裝 Node.js 與 npm

TypeScript 是建立在 JavaScript 上的，所以我們需要 Node.js 來執行 TS。

1. 下載 Node.js 官方 LTS 版本（建議 20 版以上）：
   https://nodejs.org

2. 安裝完成後，打開終端機（Terminal / PowerShell / CMD），檢查版本：

```bash
node -v
npm -v
```

應該會看到版本號，例如：

```
v20.3.0
9.8.1
```

---

## Step 2：全域安裝 TypeScript

安裝 TypeScript 編譯器 tsc：

```bash
npm install -g typescript
```

檢查版本：

```bash
tsc -v
```

應該會看到類似：

```
5.2.2
```

> Tip: `tsc` 就是把 TypeScript 轉成 JavaScript 的工具。

# 建立 專案

## Step 3：建立專案資料夾

在你喜歡的位置建立資料夾：

```bash
mkdir my-ts-project
cd my-ts-project
```

初始化 npm 專案（方便管理套件）：

```bash
npm init -y
```

會生成一個 `package.json`。

---

## Step 4：建立 tsconfig.json

這是 TypeScript 的設定檔，決定編譯方式。

```bash
tsc --init
```

會生成 `tsconfig.json`，裡面可以設定：

- `"target": "es6"` → 編譯成 ES6 JS

- `"outDir": "./dist"` → 編譯後 JS 放的資料夾

- `"strict": true` → 開啟嚴格型別檢查

```bash
tsc --init -y
```

生成的 tsconfig.json 預設內容
| 選項 | 預設值 | 說明 |
| ---------------------------------- | ---------- | --------------------------------------------------- |
| `target` | `es5` | 編譯後的 JavaScript 版本 |
| `module` | `commonjs` | 模組系統，Node.js 預設 |
| `strict` | `true` | 開啟所有嚴格檢查（等同開 `strictNullChecks`, `noImplicitAny` 等） |
| `esModuleInterop` | `true` | 讓 `import x from 'y'` 可以兼容 CommonJS 模組 |
| `forceConsistentCasingInFileNames` | `true` | 檔案大小寫一致性檢查 |
| `skipLibCheck` | `true` | 跳過型別定義檔的檢查，加快編譯 |

---

## Step 5：建立第一個 TypeScript 檔案

在專案中建立 index.ts：

```ts
// index.ts
function greet(name: string) {
  console.log(`Hello, ${name}!`)
}

greet('test')
```

# 編譯、執行

## Step 6：編譯 TypeScript

### 把 TS 編譯成 JS：

```bash
tsc
```

會生成 dist/index.js（如果你有修改 outDir 的話）。

### 執行 JS：

```bash
node dist/index.js
```

你會看到：

```
Hello, test!
```

# 開發便利工具

## Step 7：開發便利工具

建議安裝 VSCode + TypeScript 擴充：

- VSCode：https://code.visualstudio.com

- TypeScript 自帶語法提示

- 可以開啟 Terminal，直接 tsc --watch 讓它自動編譯

```bash
tsc --watch
```

> Tip: 每次改 .ts，它會自動生成 .js。

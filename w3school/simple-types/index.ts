/** boolean */
let isActive: boolean = true;
let hasPermission = false;

/** number */
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let float: number = 3.14;

/** string */
let color: string = "blue";
let fullName: string = "John Doe";
let age: number = 30;
let sentence: string = `Hello, my name is ${fullName} and I'll be ${age + 1} next year.`;

/** BigInt */
const bigNumber: bigint = 9007199254740991n;
const hugeNumber: bigint = BigInt(9007199254740991);

/** Symbol  */
const uniqueKey: symbol = Symbol('description');
const obj = {
  [uniqueKey]: 'This is a unique property'
};
console.log(obj[uniqueKey]);
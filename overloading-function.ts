//function ชื่อเดียวกัน แต่สามารถรับค่าได้หลายรูปแบบ parameter

function greet(): string;
function greet(name: string): string;
function greet(name: string[]): string;
function greet(name?: unknown) {
  //logic
  if (!name) {
    //name undefined
    return "Hello world!";
  }
  if (typeof name === "string") {
    return `Hello ${name}`;
  }
  if (Array.isArray(name) && name.every((value) => typeof value === "string")) {
    const names = name as string[];
    return names.map((item) => `Hello ${item}!`);
  }
  throw new Error("Argument incorrect");
}
console.log(greet());
console.log(greet("mrcha"));
console.log(greet(["A1", "A2", "A3"]));

//inference
const fullName = "Prayut";
const age = 100;

//reference
let str: string = "abc1234";
const num: number = NaN;
const bool: boolean = true;
const nil: null = null;
const und: undefined = undefined;
const an: any = "as";
const obj: object = {
  a: 1,
  b: 2,
};
const arr: string[] = ["a", "b"];
const numArray: number[] = [3, 4, 5, 3];

//union type
let grade: number | string = 3.5;
let grades: (number | string)[] = ["A", 1.3, "B", "B+"];

//tuple type
let rgb: [number, number, number] = [255, 125, 100];

//literal type
const role: "admin" | "user" | "premium" = "premium";

//enum type
enum Role {
  "admin", //0
  "user", //1
  "premium", //2
}
let input = 2;
if (input === Role.premium) {
  console.log("user is premium");
}

console.log(Role.premium);

//type
type AlphaNumeric = number | string | boolean;
const password: AlphaNumeric = 34;
const confirmPassword: AlphaNumeric = 34;

//interface type
interface Employee {
  id: number;
  fullName: string;
  birthDate: Date;
  position?: string; // optional
  status?: string; //optional
  [key: string]: any;
}

const john: Employee = {
  id: 1,
  fullName: "Mrcha",
  birthDate: new Date("1999-05-13"),
  position: "Programmer",
  email: "potter1805@gmail.com",
};

const ging: Employee = {
  id: 2,
  fullName: "Gingggg",
  birthDate: new Date(),
  status: "ออกจากงานแล้ว",
};
console.log(john);
console.log(ging);

//extends interface
interface EmployeeSupport extends Employee {
  telephone: string;
}
const joseph: EmployeeSupport = {
  id: 3,
  fullName: "Joseph star",
  birthDate: new Date(),
  telephone: "08-12345678",
  address: "Bangkok",
};
console.log(joseph);

//interface function
interface MyMath {
  version: string;
  sum2(a: number, b: number, c?: number): number;
  sumVoid(a: number, b: number, c?: number): void;
}
const myMath: MyMath = {
  version: "1.10.1",
  sum2(a, b, c) {
    return a + b + (c || 0);
  },
  sumVoid(a, b, c) {
    console.log("write ==> " + (a - b - (c || 0)));
  },
};

console.log(myMath.version);
console.log(myMath.sum2(2, 15));
console.log(myMath.sumVoid(50, 23, 2));

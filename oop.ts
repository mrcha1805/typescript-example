type BirthDateData = string | Date;
class Person {
  static version: string = "1.3.4";
  firstName: string;
  lastName: string;

  private birthDate?: BirthDateData;
  private rootPassword: string = "Pass1234";

  //public protected
  protected key = "324d524e-4d64-4719-9994-bf670e1ccea5";
  constructor(firstName: string, lastName: string, bDate?: BirthDateData) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = bDate;
  }
  public getDetail() {
    this.getLastName();
    return `${this.firstName} ${this.lastName}`;
  }

  private getLastName() {
    return ` ${this.lastName}`;
  }
  getBirthDate(pass: string): string | undefined {
    if (pass !== this.rootPassword) {
      throw new Error("Password incorrect");
    }
    return this.birthDate instanceof Date
      ? this.birthDate.toString()
      : this.birthDate;
  }
  protected sayHi() {
    return "Hello world";
  }

  //getter and setter
  get Name(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  set Name(data: string) {
    const n = data.split(" ");
    if (n.length !== 2) {
      throw new Error("Full name incorrect");
    }
    this.firstName = n[0];
    this.lastName = n[1];
  }
}

class Teacher extends Person {
  schools: string[] = [];
  protected keyOrigin: string = this.key;
  protected getKeyOrigin() {
    return this.sayHi();
  }
}
class Student extends Teacher {
  id: string | undefined;
  getKeyId() {
    this.id = this.key;
    this.getKeyOrigin();
    this.sayHi();
    return `${this.id}`;
  }
}

const user = new Person("user", "chanrueang");
console.log(Person.version);
console.log(user.firstName);
console.log(user.getDetail());

//const mrcha = new Person("mrcha", "chan", new Date("1989-05-18"));
const mrcha = new Person("mrcha", "chan", "1989-05-18");
console.log(mrcha.getBirthDate("Pass1234"));

const joe = new Teacher("joe", "xxxx", "1999-01-12");
console.log(joe.getDetail());
console.log(joe.getBirthDate("Pass1234"));
joe.schools.push("Wat school", "International School");
console.log(joe.schools);
joe.Name = "aaaa bbbb"; //setter
console.log(joe.Name); //getter
//console.log(joe.getKeyOrigin());

const stu = new Student("joe", "xxxx", "1999-01-12");
console.log(stu.getKeyId());

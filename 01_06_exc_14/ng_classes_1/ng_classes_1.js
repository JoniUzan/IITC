export class Person {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }
  write() {
    console.log(`${this.name} ${this.age} ${this.height}`);
  }
}

const p1 = new Person("miko", 12, 1.5);
const p2 = new Person("mor", 21, 1.6);
p1.write();
p2.write();

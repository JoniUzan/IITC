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

export class Employee extends Person {
  constructor(name, age, height, jobDescription, jobPosition) {
    super(name, age, height);
    this.jobDescription = jobDescription;
    this.jobPosition = jobPosition;
  }
  write() {
    console.log(
      `${this.name} ${this.age} ${this.height} ${this.jobDescription} ${this.jobPosition}`
    );
  }
}



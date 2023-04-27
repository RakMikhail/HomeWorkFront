"use strict";

class Person {
  constructor(firstName, lastName, age, birthDayDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.birthDayDate = birthDayDate;
  }

  celebrate() {
    return console.log("Happy Birthday, let’s celebrate");
  }
}

class Employee extends Person {
  #salary;
  constructor(firstName, lastName, age, birthDayDate, salary, jopPosition) {
    super(firstName, lastName, age, birthDayDate);
    this.#salary = salary;
    this.jopPosition = jopPosition;
  }

  salaryForYear() {
    console.log(
      `Salary for year for ${this.firstName} ${this.lastName} is ${
        this.#salary * 12
      }`
    );
  }

  celebrate() {
    let year = new Date().getFullYear();
    let day = new Date(this.birthDayDate);
    day.setFullYear(year);
    switch (day) {
      case 0:
      case 6:
        return super.celebrate();
        break;
      default:
        return console.log("Happy Birthday, but I need to work");
    }
  }
}

const people1 = new Person("Misha", "Rak", 26, new Date("1997-01-24"));

const emp = new Employee(
  "Kaban",
  "Kabanuch",
  26,
  new Date("1997-01-24"),
  1201,
  "rabotyaga"
);
people1.celebrate();
emp.celebrate();

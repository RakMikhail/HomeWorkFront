class Employee {
  static vacationDays = 18;

  constructor(firstName, lastName, age, jobPosition, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.jobPosition = jobPosition;
    this.salary = salary;
  }

  get fullName() {
    console.log(`full name is ${this.firstName} ${this.lastName}`);
  }

  salaryForYear() {
    console.log(
      `Salary for year for ${this.firstName} ${this.lastName} is ${
        this.salary * 12
      }`
    );
  }
}

const people1 = new Employee("Misha", "Rak", 26, "Rabotyaga", 16500);
const people2 = new Employee("Kaban", "Kabanuch", 34, "Boss", 36500);
console.log(people1);
people1.fullName;
people1.salaryForYear();
console.log(people2);
people2.fullName;
people2.salaryForYear();

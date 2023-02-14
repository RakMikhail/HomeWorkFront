// "use strick";
// //task1
// let dayOfMybirthday = new Date("1997-01-24");
// let day = dayOfMybirthday.getFullYear;
// console.log(
//   `${dayOfMybirthday.getDate()}.${
//     dayOfMybirthday.getMonth() + 1
//   }.${dayOfMybirthday.getFullYear()}`
// );
//task 2

// function getDiffDays(str1, str2) {
//   let date1 = new Date(str1);
//   let date2 = new Date(str2);

//   if (isNaN(date1) || isNaN(date2)) {
//     console.error("Error: invalid date");
//     return;
//   }
//   let differendsInTime = date2.getTime() - date1.getTime();

//   if (differendsInTime < 0) {
//     console.error("Error: your start date is later than end");
//     return;
//   }
//   return differendsInTime / (24 * 60 * 60 * 1000);
// }

// console.log(getDiffDays("2020-01-01", "2020-01-17")); // 16
// console.log(getDiffDays("2020-01-01", "2020-03-15")); // 74
// console.log(getDiffDays("2222222222", "2020-03-15")); // Error: invalid date
// console.log(getDiffDays("2021-01-02", "2020-03-15")); // Error: your start date is later than end

//task 3

// function isWeekend(str) {
//   let date = new Date(str);
//   if (isNaN(date)) {
//     console.error("Error: invalid date");
//     return;
//   }
//   switch (date.getDay()) {
//     case 0:
//     case 6:
//       return true;

//     default:
//       return false;
//   }
// }

// console.log(isWeekend("2022-02-12")); // true
// console.log(isWeekend("2022-02-13")); // true
// console.log(isWeekend("2022-02-09")); // false

//task 4

const person = {
  fullName: "Sherlock Holmes",
  address: {
    street: "Baker Street",
    city: "London",
    house: "221b",
  },
};

let json = JSON.stringify(person);
const newPerson = JSON.parse(json);

let {
  fullName,
  address: { street, city, house },
} = newPerson;

console.log(fullName);
console.log(street);
console.log(city);
console.log(house);

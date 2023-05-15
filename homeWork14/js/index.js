//1 task
// function read() {
//   fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((result) => result.json())
//     .then((data) => {
//       localStorage.setItem("user", JSON.stringify(data));
//     })
//     .catch((err) => console.error(err));
// }

// const user = localStorage.getItem("user");
// if (user) {
//   console.log(JSON.parse(user));
// } else {
//   read();
// }

// tast 2
// function isValidDateFormat(str) {
//   let regexp = /^\d\d\d\d\/\d\d\/\d\d\s\d\d\:\d\d$/;
//   return regexp.test(str);
// }

// console.log(isValidDateFormat("2012/09/18 12:10")); // true
// console.log(isValidDateFormat("12.02.2022 12:10")); // false

//task3
function isAfter(data1, data2) {
  if (data1 > data2) {
    return true;
  } else {
    return false;
  }
}
console.log(isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))); // true
console.log(isAfter(1648636135000, 1648549735000)); // true
console.log(isAfter(1648549735000, 1648636135000)); // false

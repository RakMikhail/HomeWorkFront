"use strick";

function longest(s1, s2) {
  let array1 = s1.split("");
  let array2 = s2.split("");
  return dublicate(array1.concat(array2)).sort().join("");
}

function dublicate(array) {
  let sortArray = [];
  for (const symbol of array) {
    if (!sortArray.includes(symbol)) {
      sortArray.push(symbol);
    }
  }
  return sortArray;
}

a = "xyaabbbccccdefww";
b = "xxxxyyyyabklmopq";
console.log(longest(a, b));
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

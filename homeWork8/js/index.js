//task1
function sumTwoSmallestNumbers(...args) {
  if (args.length > 1) {
    args.sort(function (a, b) {
      return a - b;
    });
    return args[0] + args[1];
  } else {
    console.error("Enter valid value");
    return;
  }
}

console.log(sumTwoSmallestNumbers(19, 5, 42, 2, 77)); // 7
console.log(sumTwoSmallestNumbers(1, 3, 2)); // 3
console.log(sumTwoSmallestNumbers(1)); // undefined и отдельный console.error("...")

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

// console.log(sumTwoSmallestNumbers(19, 5, 42, 2, 77)); // 7
// console.log(sumTwoSmallestNumbers(1, 3, 2)); // 3
// console.log(sumTwoSmallestNumbers(1)); // undefined и отдельный console.error("...")

//task2
function createCalculator(a) {
  let number = a;
  return {
    sum: function (x) {
      return (number = number + x);
    },
    mult: function (x) {
      return (number = number * x);
    },
    sub: function (x) {
      return (number = number - x);
    },
    div: function (x) {
      return (number = number / x);
    },
  };
}

const calc = createCalculator(10);
console.log(calc.sum(5)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11

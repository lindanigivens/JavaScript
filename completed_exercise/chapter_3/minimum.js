// minimum

const min = function (num1, num2) {
  return num1 < num2 ? num1 : num2;
};

console.log(min(0, 10));

// minimum using rest parameters

const minimum = function (...numbers) {
  let result = +Infinity;
  for (let number of numbers) {
    if (number < result) result = number;
  }
  return result;
  console.log("hi");
};

console.log(minimum([100, 10, 12]));

// Beans for life

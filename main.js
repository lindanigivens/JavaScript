const min = function (num1, num2) {
  if (num1 < num2) {
    return num1;
  } else if (num1 == num2) {
    return `They are both the same`;
  } else {
    return num2;
  }
};

console.log(min(10, 11));

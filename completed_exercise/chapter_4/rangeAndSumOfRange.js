// range function

const range = function (start, end) {
  let range = [];
  for (let counter = start; counter <= end; counter++) {
    range.push(counter);
  }
  return range;
};

console.log(range(1, 20));

// sum function

const sum = function (arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log(sum(range(1, 10)));

// rangeBonus function bonus assignment

const rangeBonus = function (start, end, step = 1) {
  let rangeBonus = [];
  if (step > 0) {
    for (let counter = start; counter <= end; counter += step) {
      rangeBonus.push(counter);
    }
  } else {
    for (let counter = start; counter >= end; counter -= step) {
      rangeBonus.push(counter);
    }
  }
  return rangeBonus;
};

console.log(rangeBonus(1, 10, 5));

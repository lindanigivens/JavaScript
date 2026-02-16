// range 1.0

const range1 = function (start, end) {
  let range1 = [];
  let counter = start;
  while (counter <= end) {
    range.push(counter++);
  }
  return range1;
};

// range and sum of range

const range = function (start, end, step = 1) {
  let range = [],
    counter = start;
  if (step > 0) {
    while (counter <= end) {
      range.push(counter);
      counter += step;
    }
  } else {
    while (counter >= end) {
      range.push(counter);
      counter += step;
    }
  }
  return range;
};

const sum = function (arr) {
  let sum = 0,
    i = 0;
  while (i <= arr.length - 1) {
    sum += arr[i];
    i++;
  }
  return sum;
};

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));

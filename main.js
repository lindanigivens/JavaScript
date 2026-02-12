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

const reverseArray = function (arr) {
  let reverseArray = [],
    counter = arr.length - 1,
    copyOfArr = [...arr];
  while (counter >= 0) {
    reverseArray.push(copyOfArr.pop());
    --counter;
  }
  return reverseArray;
};

const reverseArrayInPlace = function (arr) {
  let left = 0,
    end = arr.length - 1,
    i = 0;

  while (i <= 2) {
    left = arr[i];
    arr[i] = arr[end - i];
    arr[end - i] = left;
    i++;
  }

  return arr;
};

console.log(reverseArrayInPlace(range(1)));

/// Use slice !!!!

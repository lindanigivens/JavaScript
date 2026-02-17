const reverseArray = function (arr) {
  let reverseArray = [];

  for (let counter = 0, arrCopy = arr; counter < arr; counter++) {
    reverseArray.push(arrCopy.pop());
  }
  return reverseArray;
};

console.log(reverseArray([1, 2, 3, 4]));

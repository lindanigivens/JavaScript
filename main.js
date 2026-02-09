// Bonus Assignment

function range(start, end, step = 1) {
  let range = [start];

  for (let counter = step; counter < end; ) {
    range.push((counter = step + counter));
  }

  return range;
}

// The sum of range  2.0

function sum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  console.log(result);
}

// console.log(sum(range(300, 1000)));

console.log(range(5, 1, -1));

// Hey girly we tryna make this negative count backwards keep on keeping on God loves you!

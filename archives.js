// Chapter 2, Looping a triangle

for (let start = ""; start.length < 7; console.log((start += "#"))) {}

// Chapter 2, FizzBuzz

for (let result = 1; result <= 100; result++) {
  if (result % 5 == 0 && result % 3 == 0) {
    console.log(`FizzBuzz`);
  } else if (result % 5 == 0 && result % 3 != 0) {
    console.log(`Buzz`);
  } else if (result % 3 == 0) {
    console.log(`Fizz`);
  } else {
    console.log(result);
  }
}

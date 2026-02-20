// fizz buzz

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

console.log("h1");

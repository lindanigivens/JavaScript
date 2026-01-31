// Chapter 2, Looping a triangle

for (
  let triangle = "#";
  triangle.length <= 7;
  console.log((triangle += "#"))
) {}
// Chapter 2, FizzBuzz

for (counter = 1; counter <= 100; counter++) {
  if (counter % 5 == 0 && counter % 3 == 0) console.log(`FizzBuzz`);
  else if (counter % 3 == 0) console.log(`Fizz`);
  else if (counter % 5 == 0 && !counter % 3 == 0) console.log(`Buzz`);
  else console.log(counter);
}

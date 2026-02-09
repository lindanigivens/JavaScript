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

// Chapter 2, Chessboard ~ Finally Understand

let size = 8;
let board = "";

for (let col = 0; col < size; col++) {
  for (let row = 0; row < size; row++) {
    if ((row + col) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);

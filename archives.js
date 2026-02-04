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

// Chapter 3, Chessboard ~ Attempt

// let size = 8;
// let a = " ";
// let b = "#";
// let board = "";

// if (size % 2 == 0) {
//   let even = `${`${a + b}`.repeat(size / 2)}\n`;
//   let odd = `${`${b + a}`.repeat(size / 2)}\n`;
//   let oddEven = even + odd;
//   board = oddEven.repeat(size / 2);
// } else {
//   let even = `${`${a + b}`.repeat(Math.floor(size / 2))}${a}\n`;
//   let odd = `${`${b + a}`.repeat(Math.floor(size / 2))}${b}\n`;
//   let oddEven = even + odd;
//   board = `${oddEven.repeat(Math.floor(size / 2))}${even}`;
// }
// console.log(board);

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

// Chapter 4, Own learning

const hummus = function (factor) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    } else if (ingredientAmount == 0.25) {
      ingredientAmount = "";
      ingredientAmount += "a quarter";
    } else if (ingredientAmount == 0.5) {
      ingredientAmount = "";
      ingredientAmount += "a half";
    } else if (ingredientAmount % 1 == 0.25) {
      ingredientAmount -= 0.25;
      ingredientAmount += " and a quarter";
    } else if (ingredientAmount % 1 == 0.5) {
      ingredientAmount -= 0.5;
      ingredientAmount += " and a half";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};
hummus(50);

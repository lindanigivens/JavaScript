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

// Chapter 3, Own learning

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

// Chapter 3, Minimum

const min = function (num1, num2) {
  return num1 < num2 ? num1 : num2;
};

console.log(min(0, 10));

// Chapter 3, Recursion

function isEven(n) {
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else if (n < 0) {
    return isEven(n + 2);
  } else {
    return isEven(n - 2);
  }
}

console.log(isEven(-4));

// Chapter 3, Bean counting

function countBs(str) {
  let position = 0;
  let counter = 0;
  for (; position <= str.length - 1; position++) {
    if (str[position] === "B") {
      counter++;
    }
  }
  return counter;
}

console.log(countBs("I Love Beans! Baby!"));

// Chapter 3, Bean Counting 2.0

function countChar(str, findLetter) {
  let position = 0;
  let counter = 0;
  for (; position <= str.length - 1; position++) {
    if (str[position] === findLetter) {
      counter++;
    }
  }
  return counter;
}

console.log(countChar("My name is Programmer!", "m"));

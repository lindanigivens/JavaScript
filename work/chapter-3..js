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

// playing around with hummus

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

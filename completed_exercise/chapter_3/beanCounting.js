// bean counting

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

// bean counting 2.0

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

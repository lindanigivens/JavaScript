function countBs(str) {
  let counter = 0;
  let position = 0;
  for (; str[position] <= str.length - 1; position++) {
    if (str[position] === "B") {
      counter++;
    }
  }
}

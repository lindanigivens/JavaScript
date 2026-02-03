// function wrapValue(n) {
//     let local = n;
//     return () => local;
// }

function multiplier(factor) {
  return (number) => number * factor;
}

let twice = multiplier(3);
console.log(twice(40));

// hello world

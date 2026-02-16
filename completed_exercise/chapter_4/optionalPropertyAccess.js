// optional property access

function city(object) {
  return object.population?.men;
}

console.log(
  city({
    address: { city: "Toronto" },
    population: { men: 21e6, women: 2e7 },
  }),
);

console.log(city({ name: "Vera" }));

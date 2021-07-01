function mutate(array) {
  let arrayUpper = array.map((element) => element.toUpperCase());
  return arrayUpper;
}

//validate code node freightMutator.js
const mutated = mutate(["dog", "ray gun", "cat"]);
console.log("Mutated Items");
console.log(mutated); // should be ['DOG', 'CAT', 'ZIPPERS']

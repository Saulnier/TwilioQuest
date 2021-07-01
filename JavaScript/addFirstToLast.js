function addFirstToLast(input) {
  let firstAndLast = "";

  if (input.length > 0) {
    firstAndLast = input.shift() + input.pop();
  }

  return firstAndLast;
}

console.log(addFirstToLast(["first", "second", "third"]));
console.log(addFirstToLast(["golden", "terrier"]));
console.log(addFirstToLast(["cheerio"]));
console.log(addFirstToLast([]));

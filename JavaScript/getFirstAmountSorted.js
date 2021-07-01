function getFirstAmountSorted(inputArray, numberOfItems) {
  // Step 1: sort inputArray alphabetically
  inputArray.sort();
  // Step 2: create an array which contains the first N items of the sorted

  let newArray = inputArray.slice(0, numberOfItems);
  //         array - the number of items is provided in the numberOfItems
  //         variable
  // Step 3: return the new array you created at step 2
  return newArray;
}

// The lines of code below test your function when you execute your code in
// the terminal - they are not required for your function to work
const newArray = getFirstAmountSorted(
  ["cat", "apple", "bat", "dino", "mouse", "tiger"],
  3
);
console.log(newArray); // << should print out ['apple', 'bat']

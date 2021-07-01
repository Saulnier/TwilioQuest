function scanAndFilter(items, notWanted) {
  let filterItems = items.filter((items) => items !== notWanted);
  return filterItems;
}
//validate code node freightFilter.js
const filtered = scanAndFilter(
  ["dog", "ray gun", "cat", "zippers", "ray gun"],
  "ray gun"
);
console.log("Filtered Items");
console.log(filtered); // should be ['dog', 'cat', 'zippers']

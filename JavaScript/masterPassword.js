const passwordArray = [
  ["Q", "W", "E", "R", "T", "Y"],
  ["A", "S", "D", "F", "G", "H"],
  ["Z", "X", "C", "V", "B", "N"],
  ["U", "I", "O", "P", "!", "@"],
  ["H", "J", "K", "L", "#", "$"],
  ["M", "%", "^", "&", "*", "?"],
];

function findLetter(x, y) {
  let coordinates = passwordArray;
  return coordinates[x][y];
}

//console log x6, but there must be a better way. Maybe create an array?
console.log(findLetter(1, 3));

findLetter(1, 3);
findLetter(3, 4);
findLetter(2, 5);
findLetter(3, 4);
findLetter(0, 4);
findLetter(0, 2);

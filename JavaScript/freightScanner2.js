function scan(array) {
  let contrabandIndex = [];
  array.forEach((element, index) => {
    if (element === "contraband") {
      contrabandIndex.push(index);
    }
  });
  return contrabandIndex;
}

//validate code node freightScanner2.js
const indexes = scan(["dog", "contraband", "cat", "zippers", "contraband"]);
console.log("Contraband Indexes: " + indexes); // should be [1, 4]

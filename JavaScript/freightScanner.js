function scan(freight) {
  contrabandCount = 0;
  freight.forEach((element) => {
    if (element === "contraband") {
      contrabandCount++;
    }
  });
  return contrabandCount;
}

//validate code node freightScanner.js
const numItems = scan(["dog", "contraband", "cat", "zippers", "contraband"]);
console.log('Number of "contraband": ' + contrabandCount);

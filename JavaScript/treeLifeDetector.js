const argumentValue = process.argv[2];
const treelifeStatus = Number(argumentValue);

if (treelifeStatus === 0) {
  console.log(`alive`);
} else {
  console.log(`other`);
}

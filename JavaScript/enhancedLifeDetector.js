const lifeStatusID = Number(process.argv[2]);

if (lifeStatusID === 0) {
  console.log(`alive`);
} else if (lifeStatusID === 1) {
  console.log(`flowering`);
} else if (lifeStatusID === 2) {
  console.log(`shedding`);
} else {
  console.log(`other`);
}

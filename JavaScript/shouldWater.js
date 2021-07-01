const lifeStatusID = Number(process.argv[2]);
const dryness = Number(process.argv[3]);

if (lifeStatusID === 0 && dryness > 10) {
  console.log(`WATER`);
}

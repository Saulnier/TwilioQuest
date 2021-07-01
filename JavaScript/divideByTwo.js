const { number } = require("yargs");

const argumentValue = process.argv[2];

const numberValue = Number(argumentValue);

const results = numberValue / 2;

console.log(results);

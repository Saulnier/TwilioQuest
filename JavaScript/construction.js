function construct(name) {
  let user = {
    name: name,
    material: "human",
    assemble: true,
    duration: 1000,
  };
  return user;
}

// used by you to test your solution.
const somePerson = construct("Adam");
console.log(`name is: ${somePerson.name}`);
console.log(`duration is: ${somePerson.duration}`);

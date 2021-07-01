class Materializer {
  constructor(_target) {
    this.target = _target;
    this.activated = false;
  }
  activate() {
    this.activated = true;
  }
  materialize() {
    if (this.activated) {
      return this.target;
    } else {
      return undefined;
    }
  }
}

// //validate code node classes.js
const m = new Materializer("Kevin");
console.log(m.activated); // would print "false"

m.activate();
console.log(m.activated); // would print "true"

console.log(m.materialize()); // would print "Kevin"

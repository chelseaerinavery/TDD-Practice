var Person = require("./person");
var Statue = require("./statue");

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  gazeAtVictim(victim) {
    this.statues.push(new Statue(victim.name));
    if (this.statues.length > 3) {
      return new Person(this.statues.shift().name, "relieved");
    }
  }
}

module.exports = Medusa;

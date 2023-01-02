class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = { dresses: ["Iris"] };
    this.disposition = "Good natured";
  }

  receiveBelief() {
    this.dust += 1;
  }

  believe() {
    this.dust += 10;
  }

  makeDresses([dress]) {
    this.clothes.dresses.push(dress);
  }

  becomeProvoked() {
    this.disposition = "Vengeful";
  }

  replaceInfant() {}
}

module.exports = Fairy;

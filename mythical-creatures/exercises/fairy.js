class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = { dresses: ["Iris"] };
    this.disposition = "Good natured";
    this.humanWards = [];
    this.count = 0;
  }

  receiveBelief() {
    this.dust += 1;
  }

  believe() {
    this.dust += 10;
  }

  makeDresses(flowers) {
    this.clothes.dresses.push(...flowers);
  }

  becomeProvoked() {
    this.disposition = "Vengeful";
  }

  replaceInfant(infant) {
    if (this.disposition === "Vengeful") {
      this.humanWards.push(infant);
      this.count += 1;
      if (this.count >= 3) {
        this.disposition = "Good natured";
      }
      return (infant.disposition = "Malicious");
    }
    return infant;
  }
}

module.exports = Fairy;

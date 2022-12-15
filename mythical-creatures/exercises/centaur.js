class Centaur {
  constructor({ name, type }) {
    this.name = name;
    this.breed = type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.count = 0;
  }
  toggleCranky() {
    this.count += 1;
    if (this.count >= 3) {
      this.cranky = true;
    }
  }
  shootBow() {
    if (this.cranky || !this.standing) {
      return "NO!";
    }
    this.toggleCranky();
    return "Twang!!!";
  }
  run() {
    if (this.cranky || !this.standing) {
      return "NO!";
    }
    this.toggleCranky();
    return "Clop clop clop clop!!!";
  }
  sleep() {
    if (this.standing) {
      return "NO!";
    } else {
      this.cranky = false;
      return "ZZZZ";
    }
  }
  drinkPotion() {
    if (this.layingDown) {
      return "Not while I'm laying down!";
    }
    this.cranky = false;
  }
  standUp() {
    this.standing = true;
    this.layingDown = false;
  }
  layDown() {
    this.standing = false;
    this.layingDown = true;
  }
}

module.exports = Centaur;

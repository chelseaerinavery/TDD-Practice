class Magician {
  constructor({ name, assistant, clothing = "top hat" }) {
    this.name = "The Great " + name;
    this.assistant = assistant;
    this.favoriteAccessory = clothing;
    this.confidencePercentage = 10;
  }

  performIncantation(incantation) {
    return incantation.toUpperCase() + "!";
  }

  performTrick() {
    this.confidencePercentage += 10;
    if (this.favoriteAccessory === "top hat") {
      return "PULL RABBIT FROM TOP HAT";
    } else {
      return "PULL DOVE FROM SLEEVE";
    }
  }

  performShowStopper() {
    if (this.confidencePercentage < 100 || !this.assistant) {
      return "Oh no, this trick is not ready!";
    } else {
      return "WOW! The magician totally just sawed that person in half!";
    }
  }
}

module.exports = Magician;

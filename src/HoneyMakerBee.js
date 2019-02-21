class HoneyMakerBee extends Bee {
  constructor(age, color, food, eat) {
    super(age, color, food, eat);
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }
  makeHoney() {
    this.honeyPot++;
  }
  giveHoney() {
    this.honeyPot--;
  }
};

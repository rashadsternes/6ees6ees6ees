class ForagerBee extends Bee {
  constructor(age, color, food, eat) {
    super(age, color, food, eat);
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }
  forage(treasure) {
    this.treasureChest.push(treasure);
  }
};

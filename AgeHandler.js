class AgeHandler {
  constructor(ages) {
    this.ages = ages;
  }

  olders() {
    const olderAge = 18;
    const olders = [];

    this.ages.forEach(age => { if (age >= 18) olders.push(age); });

    return olders;
  }

  youngs() {
    const olderAge = 18;
    const youngs = [];

    this.ages.forEach(age => { if (age < 18) youngs.push(age); });

    return youngs;
  }

  isOlderThan(age) { return this.ages.filter((v) => v > age); }
  isYoungerThan(age) { return this.ages.filter((v) => v < age); }
}

const ageHandler = new AgeHandler([10, 12, 20, 22, 23, 24, 30, 40, 70]);

const olders = ageHandler.olders();
const youngs = ageHandler.youngs();
const agesOlderThanTwenty = ageHandler.isOlderThan(20);
const agesYoungerThanTwenty = ageHandler.isYoungerThan(20);

console.log(`Olders: ${olders}`);
console.log(`Youngs: ${youngs.length > 0 ? youngs : "None"}`);
console.log(`Is older than 20: ${agesOlderThanTwenty.length > 0 ? agesOlderThanTwenty : "None"}`);
console.log(`Is younger than 20: ${agesYoungerThanTwenty.length > 0 ? agesYoungerThanTwenty : "None"}`);
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
}

const ageHandler = new AgeHandler([18, 20]);

const olders = ageHandler.olders();
const youngs = ageHandler.youngs();

console.log(`Olders: ${olders}`);
console.log(`Youngs: ${youngs.length > 0 ? youngs : "None"}`);
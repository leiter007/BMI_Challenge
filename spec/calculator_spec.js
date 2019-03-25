const { Person, BMICalculator } = require('./spec.helper')

"// Unit tests for METRIC method"

describe("BMICalculator", function() {
  let calculator;
  let person;

  beforeEach(function() {
    person = new Person({weight: 90, height: 186});
    calculator = new BMICalculator();
  });

  it("calculates BMI for a person using metric method", function() {
    calculator.metric_bmi(person);
    expect(person.bmiValue).to.equal(26.01);
  });

  it("sets BMI message for a person using metric method", () => {
    calculator.metric_bmi(person);
    expect(person.bmiMessage).to.equal('Overweight');
  });

})

"// Unit tests for IMPERIAL method"

describe("BMICalculator", function() {
  let calculator;
  let person;

  beforeEach(function() {
    person = new Person({weight: 200, height: 70});
    calculator = new BMICalculator();
  });

  it("calculates BMI for a person using IMPERIAL method", function() {
    calculator.imperial_bmi(person);
    expect(person.bmiValue).to.equal(28.69);
  });

  it("sets BMI message for a person using IMPERIAL method", () => {
    calculator.imperial_bmi(person);
    expect(person.bmiMessage).to.equal('Overweight');
  });
})
const { Person, BMICalculator } = require('./spec.helper')

"// Unit tests for METRIC system"

describe("BMICalculator", function() {
  let calculator;
  let person;

  beforeEach(function() {
    calculator = new BMICalculator();
  });

  it("calculates BMI for a person using metric system", function() {
    person = new Person({weight: 90, height: 186});
    calculator.metric_bmi(person);
    expect(person.bmiValue).to.equal(26.01);
  });

  it("sets BMI message for a person using metric system", () => {
    person = new Person({weight: 90, height: 186});
    calculator.metric_bmi(person);
    expect(person.bmiMessage).to.equal('Your BMI is 26.01 and you are Overweight');
  });

  it("sets correct BMI message if user has not filled in any input, using metric system", () => {
    person = new Person({weight: ' ', height: ' '});
    calculator.metric_bmi(person);
    expect(person.bmiMessage).to.equal('Please put numbers greater than 0 in both fields!');
  });

  it("sets correct BMI message if user has filled in negative HEIGHT, using metric system", () => {
    person = new Person({weight: 90, height: -5});
    calculator.metric_bmi(person);
    expect(person.bmiMessage).to.equal('Please put numbers greater than 0 in both fields!');
  });

  it("sets correct BMI message if user has filled in negative WEIGHT, using metric system", () => {
    person = new Person({weight: -5, height: 180});
    calculator.metric_bmi(person);
    expect(person.bmiMessage).to.equal('Please put numbers greater than 0 in both fields!');
  });
})

"// Unit tests for IMPERIAL system"

describe("BMICalculator", function() {
  let calculator;
  let person;

  beforeEach(function() {
    calculator = new BMICalculator();
  });

  it("calculates BMI for a person using IMPERIAL system", function() {
    person = new Person({weight_lbs: 200, height_in: 70});
    calculator.imperial_bmi(person);
    expect(person.bmiValue).to.equal(28.69);
  });

  it("sets BMI message for a person using IMPERIAL system", () => {
    person = new Person({weight_lbs: 200, height_in: 70});
    calculator.imperial_bmi(person);
    expect(person.bmiMessage).to.equal('Your BMI is 28.69 and you are Overweight');
  });

  it("sets correct BMI message if user has not filled in any input, using IMPERIAL system", () => {
    person = new Person({weight_lbs: ' ', height_in: ' '});
    calculator.metric_bmi(person);
    expect(person.bmiMessage).to.equal('Please put numbers greater than 0 in both fields!');
  });

  it("sets correct BMI message if user has filled in negative HEIGHT, using IMPERIAL system", () => {
    person = new Person({weight_lbs: 90, height_in: -5});
    calculator.metric_bmi(person);
    expect(person.bmiMessage).to.equal('Please put numbers greater than 0 in both fields!');
  });

  it("sets correct BMI message if user has filled in negative WEIGHT, using IMPERIAL system", () => {
    person = new Person({weight_lbs: -5, height_in: 180});
    calculator.metric_bmi(person);
    expect(person.bmiMessage).to.equal('Please put numbers greater than 0 in both fields!');
  });
})
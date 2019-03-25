const { Person } = require('./spec.helper')

"// Unit tests for METRIC method"
describe("Person", () => {
    let person = new Person({
        weight: 90,
        height: 186
    });

    it("should have weight of 90 kgs", () => {
        expect(person.weight).to.equal(90);
    });

    it("should have height of 186 cm", () => {
        expect(person.height).to.equal(186);
    });

    it("should calculate BMI value in METRIC method", () => {
        person.calculate_metric();
        expect(person.bmiValue).to.equal(26.01);
    });

    it("should have a BMI Message in METRIC method", () => {
        person.calculate_metric()
        expect(person.bmiMessage).to.equal('Overweight');
    });
});

"// Unit tests for IMPERIAL method"
describe("Person", () => {
    let person = new Person({
        weight: 200,
        height: 70
    });

    it("should have weight of 200 pounds", () => {
        expect(person.weight).to.equal(200);
    });

    it("should have height of 70 inches", () => {
        expect(person.height).to.equal(70);
    });

    it("should calculate BMI value in IMPERIAL method", () => {
        person.calculate_imperial();
        expect(person.bmiValue).to.equal(28.69);
    });

    it("should have a BMI Message in IMPERIAL method", () => {
        person.calculate_imperial();
        expect(person.bmiMessage).to.equal('Overweight');
    });
});
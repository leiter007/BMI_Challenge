
function Person(attr) {
    this.weight = attr.weight;
    this.height = attr.height
    this.weight_lbs = attr.weight_lbs
    this.height_in = attr.height_in
};

Person.prototype.calculate_metric = function() {
    calculator = new BMICalculator();
    calculator.metric_bmi(this)
};

Person.prototype.calculate_imperial = function() {
    calculator = new BMICalculator();
    calculator.imperial_bmi(this)
};
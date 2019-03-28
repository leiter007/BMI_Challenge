function BMICalculator(){
};

BMICalculator.prototype.metric_bmi = function(obj) {
    let weight = obj.weight;
    let height = obj.height;
    if (weight < 0 || height < 0 || weight == 0 || height == 0 || weight !== null && weight !== '' || height !== null && height !== '') {
        obj.bmiMessage = 'Please put numbers greater than 0 in both fields!';
    }
    if (weight > 0 && height > 0) {
        var finalBmi = weight / (height / 100 * height / 100);
        obj.bmiValue = parseFloat(finalBmi.toFixed(2));
        setBMIMessage(obj);
    }
};

BMICalculator.prototype.imperial_bmi = function(obj) {
    let weight = obj.weight_lbs; "// should be in pounds"
    let height = obj.height_in; "// should be in inches"
    if (weight < 0 || height < 0 || weight == 0 || height == 0 || weight !== null && weight !== '' || height !== null && height !== '') {
        obj.bmiMessage = 'Please put numbers greater than 0 in both fields!';
    }
    if (weight > 0 && height > 0) {
        var finalBmi = weight*703 / (height * height);
        obj.bmiValue = parseFloat(finalBmi.toFixed(2));
        setBMIMessage(obj);
    }
};

function setBMIMessage (obj){

    if (obj.bmiValue < 18.5) {
        obj.bmiMessage = 'Your BMI is ' + obj.bmiValue+' and you are Underweight'
    } 
    if (obj.bmiValue > 18.5 && obj.bmiValue < 25) {
        obj.bmiMessage = 'Your BMI is ' + obj.bmiValue +' and you are Healthy'
    }
    if (obj.bmiValue > 25 && obj.bmiValue < 30) {
        obj.bmiMessage = 'Your BMI is ' + obj.bmiValue +' and you are Overweight'
    }
    if (obj.bmiValue > 30) {
        obj.bmiMessage = 'Your BMI is ' + obj.bmiValue+' and you are Obese'
    }
}
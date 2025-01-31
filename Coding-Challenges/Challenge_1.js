const BMIcalculation = function (mass, height) {
  let bmi = mass / (height * height);
  return bmi;
};

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = BMIcalculation(massMark, heightMark);
let BMIJohn = BMIcalculation(massJohn, heightJohn);

console.log(`The BMI of Mark is: ${BMIMark}`);
console.log(`The BMI of John is: ${BMIJohn}`);

let markHigherBMI = BMIMark > BMIJohn;
console.log(`Is Mark's BMI higher than John's? ${markHigherBMI}`);

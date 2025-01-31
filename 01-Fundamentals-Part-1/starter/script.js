/*
let js = "amazing";
if (js === "amazing") alert("JavaScript is FUN!");

40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = "programmer";
job = "teacher";

lastName = "Schmedtmann";
console.log(lastName);
*/
/*
// Math operators
const now = 2037;
const ageJonas = now - 1991;
console.log(ageJonas);
const ageSarah = now - 2018;
console.log(ageJones, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);
console.log(`${firstName} ${lastName}`);

// Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x /= 2; // x = x / 2 = 50
x++; // x = x + 1 = 51
x--; // x = x - 1 = 50
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/
/*
const country = "The Netherlands";
const continent = "Europe";
let population = 17.28;
console.log(
  "My country is " +
    country +
    " and it is in " +
    continent +
    " and the population is " +
    population +
    " million."
);

const isIsland = false;
const language = "Dutch";
console.log(
  "The country " + (isIsland ? "is an island" : "is not an island") + ",",
  " the country has a population of " + population + " million,",
  " and the official language is " +
    language +
    ", so the country is " +
    country +
    "."
);
// isIsland = true;

console.log(
  `If the country would be split in half, each half would have ${
    population / 2
  } million people.`
);

console.log(
  `The population of ${country} has increased by 1 million to ${
    population + 1
  } million.`
);

populationFinland = 6;
console.log(
  `${
    population > populationFinland
      ? `${country} has more people than Finland`
      : `Finland has more people than ${country}`
  }. ${country} has a population of ${population} million, compared to Finland's ${populationFinland} million.`
);

averageCountryPopulation = 33;
console.log(
  `${
    population > averageCountryPopulation
      ? `${country} has more people than the average country`
      : `${country} has less people than the average country`
  }. The average country has a population of ${averageCountryPopulation} million compared to ${country}'s ${population} million.`
);

const countryDescription = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

function populationCompareLog() {
  console.log(
    `${country}'s population is ${Math.abs(
      (population - averageCountryPopulation).toFixed(2)
    )} million ${
      population > averageCountryPopulation ? "above" : "below"
    } average`
  );
}

populationCompareLog();

console.log(`test`);
population = 13;
populationCompareLog();
population = 130;
populationCompareLog();

console.log("9" - "5"); // -> ?
console.log("19" - "13" + "17"); // -> ?
console.log("19" - "13" + 17); // -> ?
console.log("123" < 57); // -> ?
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> ?
*/
// numNeighbours = prompt("How many neighbour countries does your country have?");
// console.log(numNeighbours);
// if (numNeighbours == 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// numNeighbours = Number(numNeighbours);
// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }
/*
if (language === "English" && population < 50 && !isIsland) {
  console.log(`Sarah  should live in ${country}`);
} else {
  console.log(`${country} does not meet Sarah's criteria`);
}

switch (language) {
  case "Chinese":
  case "Mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place");
    break;
  case "Hindi":
    console.log("Number 4");
    break;
  case "Arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

const languageMessages = {
  Chinese: "MOST number of native speakers!",
  Mandarin: "MOST number of native speakers!",
  Spanish: "2nd place in number of native speakers",
  English: "3rd place",
  Hindi: "Number 4",
  Arabic: "5th most spoken language",
};

const message = languageMessages[language] || "Great language too :D";
console.log(message);

console.log(
  `${
    population > averageCountryPopulation
      ? `${country} has more people than the average country`
      : `${country} has less people than the average country`
  }. The average country has a population of ${averageCountryPopulation} million compared to ${country}'s ${population} million.`
);
*/

////////////////////////////////////
// Coding Challenge #1

/*
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
*/
/*
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonas);

console.log(`Just a regular string...`);
console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String
multiple
lines`);
*/
/*
let age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarah can start driving license 🚗");
}

age = 15;
if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 1998;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

////////////////////////////////////
// Coding Challenge #2
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else if (BMIJohn === BMIMark) {
  console.log(`Mark's BMI (${BMIMark}) is the same as John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
*/
/*
// type conversion
const inputYear = "1991";
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1; // '11'
n = n - 1;
console.log(n);
*/
/*
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

let money = 0;
money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height;
height = 0; // 0 is a falsy value, triggers else
height = 23;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/
/*
let age = 18;
if (age === 18) console.log("You just became an adult :D (strict)");
age = "18";
if (age == 18) console.log("You just became an adult :D (loose)");

age = 19;
if (age == 18) console.log("You just became an adult :D (loose)");
if (age === 18) console.log("You just became an adult :D (strict)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 13) {
  console.log("Cool! 13 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 13 or 7");
}

if (favourite !== 13) console.log("Why not 13?");
*/

/*
let hasDriversLicense = true; // A
let hasGoodVision = true; // B
hasGoodVision = false; // B
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
hasGoodVision = true;
// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

let isTired = true; // C
isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
*/

////////////////////////////////////
// Coding Challenge #3
/*
function average(scores) {
  const sum = scores.reduce((acc, score) => acc + score, 0);
  return sum / scores.length;
}

let scoreDolphins = average([96, 108, 89]);
let scoreKoalas = average([88, 91, 110]);

if (scoreDolphins > scoreKoalas) {
  console.log(`Dolphins win the trophy`);
} else if (scoreKoalas > scoreDolphins) {
  console.log(`Koalas win the trophy`);
} else {
  console.log(`Both win the trophy`);
}
  */

/*
const day = "monday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}
*/

/*
3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  const str = "23 is bigger";
}

console.log(`I'm ${2037 - 1991} years old`);
const me = "Jonas";
console.log(`I'm ${2037 - 1991} years old ${me}`);
*/

/*
const age = 23;

// age >= 18
//   ? console.log("I like to drink wine 🍷")
//   : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
*/

////////////////////////////////////
// Coding Challenge #4

/*
const bill = 275;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
*/

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

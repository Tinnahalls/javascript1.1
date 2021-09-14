// Project 1 
/*
let country = 'Iceland';
let continent = 'Europe';
let population = 3400000;

console.log(country,continent,population)

// Project 2 

const isIsland = true;
let language

console.log(isIsland, population, country,language)


// Project 3

language = "icelandic"; 

console.log(isIsland, population, country,language)

// Project 4  

population = (population+1); 

const isbigger = population > 33000000 ? true : false; 
console.log(isbigger);

const description = country + " is in " + continent + " and it's " + population + " people speak portugese "

console.log(description);

// Project 5 - This function tells us if the population of a country is above or below avarage. 

let people = 3000000; 
function find(people) {
let result;
  if (people > 33.000) {
    result = "Icelandic population is above avarge"
  }
else {
    result = " icelandic populations is below avarage"
}
return result;

}
console.log(find(people));

// Project 6 - Equality Operatos == vs. === promt doesnt work fully.

let numNeighbours = 1;

  if (numNeighbours === 1){
    console.log("Only one border!");
  }
  
  else if(numNeighbours > 1){
  console.log(numNeighbours + " are greate than 1");
  }

  else if(numNeighbours === 0){
    console.log("No Borders");
  }


// Project 7 - 
// Sarah wants to live in a country that is not an island, and is larger than 50000000.

let country = 'Iceland';
let continent = 'Europe';
let population = 3400000;
let numNeighbours = 4;

if (population > 50000000 && numNeighbours > 1 ) {
  console.log(" You found your country"); 
}

else if(population < 50000000 || numNeighbours < 1) {
      console.log("This is not your ideal country"); 
    }

// Project 8

let language = 'hindi';

switch(language) {

case 'chinese':
case 'mandarine':
  console.log("most number of native speakers!")
  break;

case 'spanish':
  console.log('2nd Place in number of native speakers')
  break;

case 'english':
  console.log('3rd place')
  break;

case 'hindi':
  console.log("Number 4")
  break;

case 'arabic':
  console.log("5th most spoken language")
  break;

default: 
console.log("great langauge")
  
}

// Project 9 
population > 33000000 ? console.log( "populations is above avarage") : console.log( "populations is below avarage");

*/
// Using a list of objects 

const arrOfcountries = [
  {
      name: "Poland",
      population: 3300000,
      speaksEnglish: true
  },
  {
      name: "Hawai",
      population: 776000,
      speaksEnglish: false
  },
  {
      name: "France",
      population: 70000,
      speaksEnglish: true
  }

]

if(arrOfcountries[2].population > arrOfcountries[1].population)
console.log(arrOfcountries[2].name +' is larger than ' + arrOfcountries[1].name);
else console.log(arrOfcountries[2].name + " is not larger than " + arrOfcountries[1].name);


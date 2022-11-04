import countries from "./countries.js"
import webTechs from "./web_techs.js"



//Declare an empty array
let emptyArr = [];
//Declare an arry with more than 5 numbers of elements
const arr1 = [1, 2, 3, 4, 5]
console.log(arr1.length);
console.log(arr1[0]);

//Array with mixed data types
const mixedDataTypes = [2, 'boy', true, "10", {key: 'ball'}, [ 1, 3, 6]]
console.log(mixedDataTypes.length);

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
itCompanies = itCompanies.split(", ")
console.log(itCompanies);

//print the number of companies in the array
console.log(itCompanies.length);

//print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[6]);

//print out each company
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

//to change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

//print the array as a sentence:
console.log(`${itCompanies} are big IT companies`);

//check if a certain company exist in the itCompanies array.
if (itCompanies.includes('Apple') === true) {
    console.log('Company');
}else{
    console.log('Company not found');
}

//filter out companies which have more than one 'o' without filter method
let companies = [];
for (const company of itCompanies) {
   let eachCompany = company.match(/o/gi) 
if (eachCompany !=null && eachCompany.length > 1) {
    companies.push(company)
   }
}
console.log(companies);
 

//sort the array using sort() method
itCompanies.sort() 
console.log(itCompanies);

//reverse the array by using reverse() method
itCompanies.reverse()
console.log(itCompanies);

//slice out the first 3 companies
console.log(itCompanies.slice(0, 3));

//slice out the last 3 companies
console.log(itCompanies.slice(4));

//slice out the middle IT company or companies
console.log(itCompanies.slice(3,4));

//Remove the first IT company from the array
itCompanies.shift()
console.log(itCompanies);

//Remove the middle IT company or companies from the array
itCompanies.splice(2, 2)
console.log(itCompanies);

//remove the last IT company from the array
itCompanies.pop()
console.log(itCompanies);

//Remove all IT companies
itCompanies.splice(0)
console.log(itCompanies);

//Exercise: Level 2
//Create a separate Countries.js file and store the countries array in to this file, create a separate file web_techsjs and store the webTechs array into this file. Access both file in main.js file.

// First remove the punctuations and change the string to array and count the umber of words in the array.
let text = 'I love teaching and empowering people I teach HTML CSS JS React Python'
const textArr = text.split(" ")
console.log(textArr);
console.log(textArr.length);

//In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//to add meat in the beginning
console.log(shoppingCart);
shoppingCart.unshift('Meat')
console.log(shoppingCart);

//to add sugar at the end 
shoppingCart.push('Sugar')
console.log(shoppingCart);

//to remove honey 
shoppingCart.splice(4,1)
console.log(shoppingCart);

// to modify 'Tea' to 'Green Tea'
shoppingCart[3] = 'Green Tea'
console.log(shoppingCart);

//In the countries array check if 'Ethiopia' exist in the array if it exist print 'ETHIOPIA'. if doest not exist add to the contries list.
console.log(countries.includes('Ethiopia'));
countries.push('Ethiopia')
console.log(countries);

//In the webTechs array check if Sass exists in the array  and if it exists print 'Sass is a CSS preprocess' if it does not exist add Sass to the array and print the array
console.log(webTechs.includes('Sass'));
webTechs.push('Sass')
console.log(webTechs);

//Concatenate the following two varables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack);

//Exercise: Level 3
//The following is an array of 10 stuents ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24 ]
// sort the array and find min and max
console.log(ages.sort())
//min value
let min = Math.min(...ages)
console.log(min);
//max value
let max = Math.max(...ages)
console.log(max);

//to find the median
const median = (ages = []) => {
    const sorted = ages.slice().sort((a,b) => {
        return a-b
    });
    if (sorted.length % 2 === 0) {
        const first = sorted[sorted.length / 2 - 1];
        const second = sorted[sorted.length / 2];
        return (first + second) / 2;
    }else {
        const mid = Math.floor(sorted.length / 2);
        return sorted[mid];
    }
}
console.log(median(ages));

//to find the average age
const average = ages.reduce((a, b) => a + b, 0) / ages.length
console.log(average);

// To find range
//Range is max - min 
const range = max - min
console.log(range);

//Compare 

//Slice the first ten countries from the array
console.log(countries.slice(0, 10));
//find the middle country(ies) in the countries array
let middleCountry = countries[Math.round((countries.length-1) / 2)];
console.log(middleCountry);


//Divide the countries array into two equal arrays if it is even. If countries is not even , one more country for the first half.
const half = Math.ceil(countries.length / 2);
const firstHalf = countries.splice(0, half)
const secondHalf = countries.splice(-half)
console.log(firstHalf);
console.log(secondHalf);
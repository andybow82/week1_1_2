//Exercises: Level 1
const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']
const webTechs = ['HTML', 'CSS', 'Javascript', 'React', 'Redux', 'Node', 'MongoDB']
const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//Ilerate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
//while loop
let i = 0
while (i <= 10) {
    console.log(i);
    i++
}
//do while loop
let i1= 0 
do {
    console.log(i1);
    i1++
} while (i1 <= 10);

//Ilerate 10 to 0 using for loop, do the same using while and do while loop
for (let i = 10; i >=0; i--) {
   console.log(i);
    
}
//while loop
let i2 = 10
while (i2 >= 0) {
   console.log(i2); 
   i2--
}
//do while loop
let i3 = 10
do {
    console.log(i3);
    i3--
} while (i3 >= 0);

//Iterate 0 to n using for loop
let n = 4
for (let i = 0; i <= n; i++) {
    console.log(i);
}
//write a loop that makes the following pattern using console.log(): #
let  c = ""
for (let i = 0; i < 7; i++) {
   c+= '#' 
  console.log(c);  
}
//use loop to print in the following pattern:
for (let i = 0; i <= 10; i++) {
    console.log(`${i} * ${i} = ${i * i}`);
    
}
//Using loop print the following pattern:
for (let i = 0; i <= 10; i++) {
    console.log(`${i}  ${i**2}  ${i**3}`);
    
}

//Use for loop to iterate from 0 to 100 and print only even number
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
    
}
//Use for loop to iterate from 0 to 100 and print only old number
let count = 0
let j, k
for (let k = 2; k <= 100; k++) {
    for (let j = 1; j <= k; j++) {
        if (k%j ==0)
        count++
    }
    if (count == 2)
    console.log(k);
    count =0
}


//use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0
for (let i = 0; i <= 100; i++) {
    sum += i
    
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds as array
let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        sumEven += i
    }else{
        sumOdd +=i
    }
    
}
console.log(`The sum of all evens from 0 t0 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdd}`);

//to print in an array

let sumEvenArr = 0;
let sumOddArr = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        sumEvenArr += i
    }else{
        sumOddArr +=i
    }
   newArr = [sumEvenArr, sumOddArr]
}
console.log(newArr);

//Develop a small script which generate array of 5 random numbers
const array = Array(5)
.fill()
.map(()=> Math.floor(20 * Math.random()))
console.log(array);

//Develop a small script which generate array of 5 randam numbers and the numbers must be unique
let arr = []
while (arr.length < 5) {
    let r = Math.floor(Math.random() * 10) + 1;
    if (arr.indexOf(r) === -1) arr.push(r) 
        
    }
console.log(arr);

//Develop a small script which generate a six characters random id:
const rnd = (() => {
    const gen = (min, max) => max++ && [...Array(max-min)].map((s, i) => String.fromCharCode(min+i));
    const sets = {
        num: gen(48, 57),
        alphaLower: gen(97,122),

    };
    function* iter(len, set) {
        if (set.length < 1) set =Object.values(sets).flat();            
        for (let i = 0; i < len; i++) yield set[Math.random() * set.length|0] 
            
        }
        return Object.assign(((len, ...set) => [...iter(len, set.flat())].join(' ')), sets);
    
})();
console.log(rnd(6));

//Exercises: Level 2
//Develop a small script which generate any number of characters random id:
let randomAny = "";
let box = 'abcdefghijklmnopqrstuvwxyz012345789';
let randomIterator = Math.ceil(Math.random() * 18)
for (let i = 0; i <= randomIterator; i++) {
   randomAny += box[Math.floor(Math.random() * box.length)];
    
}
console.log(randomAny);

//Write a script which generates a random hexadecimal number:
let hexBox = ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5, 'f', 6, 7, 8, 9, 0];
let hexDecimalNumber = '#';
for (let i = 0; i <= 5; i++) {
    hexDecimalNumber += hexBox[Math.floor(Math.random() * hexBox.length)];
    
}
console.log(hexDecimalNumber);


//Write a script which generates a random rgb color number:
let red = Math.ceil(Math.random()*(255 - 0 + 1)+ 0);
let green = Math.ceil(Math.random()*(255 - 0 + 1)+ 0)
let blue = Math.ceil(Math.random()*(255 - 0 + 1)+ 0)
let colorRGB = (`rgb(${red}, ${green}, ${blue})`)
console.log(colorRGB);
//Using the above countries arrar, create the following new array.
const newArr1 = []
for (let i = 0; i < countries.length; i++) {
    newArr1.push(countries[i].toUpperCase())
    
}
console.log(newArr1);

//Using the above countries array, create an array for countries length.
let length = countries.map(function (countries) {
    return countries.length
})
console.log(length);
//Using the above countries array to create the following array of arrays:
const newArr2 = []
console.log(`${countries[0]}', '${countries[0].slice(0, 3).toUpperCase()}', ${length[0]}`.split());
console.log(`${countries[1]}, '${countries[1].slice(0, 3).toUpperCase()}', ${length[1]}`.split());
console.log(`${countries[2]}, '${countries[2].slice(0, 3).toUpperCase()}', ${length[2]}`.split());
console.log(`${countries[3]}, '${countries[3].slice(0, 3).toUpperCase()}', ${length[3]}`.split());
console.log(`${countries[4]}, '${countries[4].slice(0, 3).toUpperCase()}', ${length[4]}`.split());
console.log(`${countries[5]}, '${countries[5].slice(0, 3).toUpperCase()}', ${length[5]}`.split());
console.log(`${countries[6]}, '${countries[6].slice(0, 3).toUpperCase()}', ${length[6]}`.split());
console.log(`${countries[7]}, '${countries[7].slice(0, 3).toUpperCase()}', ${length[7]}`.split());
console.log(`${countries[8]}, '${countries[8].slice(0, 3).toUpperCase()}', ${length[8]}`.split());
console.log(`${countries[9]}, '${countries[9].slice(0, 3).toUpperCase()}', ${length[9]}`.split());
console.log(`${countries[10]}, '${countries[10].slice(0, 3).toUpperCase()}', ${length[10]}`.split());


//print out the countries that containing the word 'land'
function categorizeCountries(keyword) {
    if (keyword == 'land') {
        console.log(countries.filter((countries) => countries.endsWith('land')));
    }else {
        console.log('Country does not exists');
    }
    
}
categorizeCountries('land')



//print out the countries that end with 'ia'
function categorize_Countries(keyword) {
    if (keyword == 'ia') {
        console.log(countries.filter((countries) => countries.endsWith('ia')));
    }else {
        console.log('Country does not exists');
    }
    
}
categorize_Countries('ia')

//find the country with biggest number of characters
let largest = '';
for (const item of countries) {
    if (item.length > largest.length) largest = item
}
console.log(largest);


//find the country with only 5 characters.
let result = countries.filter((n) => n.length == 5)
console.log(result);


//find the longest word in the webTechs array.
let longest = '';
for (const item of webTechs) {
    if (item.length > longest.length) longest = item
}
console.log(longest);


//use the webTechs array to creat the following array of arrays:
function sayHello() {
    arr = [];
    for (let i = 0; i < webTechs.length; i++) {
        arr.push([webTechs[i], webTechs[i].length])
        
    }
    console.log(JSON.stringify(arr));
}
sayHello();

//Create the acronym MERN by using the array mernStack
const mernStack1 = ['MongoDB', 'Express', 'React', 'Node']
console.log(mernStack1);
//iterate through the array, ['HTML', 'CSS', 'JS', 'React', 'Redus', 'Node', 'Express', MongoDB'] using a for loop or for of loop and print out the items.
const iteArr = ['HTML', 'CSS', 'JS', 'React', 'Redus', 'Node', 'Express', 'MongoDB']
for (let i = 0; i < iteArr.length; i++) {
     
}
console.log(iteArr);

//This is a fruit array, ['banana', 'orange', 'mango', 'lemon'] reverse other using loop without using reverse metthod.
let fruit = ['banana', 'orange', 'mango', 'lemon']
let newFruit = [];
for (let i = fruit.length - 1; i >=0; i--) {
     newFruit.push(fruit[i]); 
}
console.log(newFruit);
// print all the elements of array as shown below.
const fullStack = [ 
    ['HTML', 'CSS', 'JS', 'Ract'],
    ['Node', 'Express', 'MongoDB']
]
const merge = fullStack.flat(1)
 console.log(merge);

 //Exercise: Level 3
 const countries2 = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]
  //
const sortedCountries2 = [...countries2].sort((a, b) => a - b);
console.log(sortedCountries2);

//sort the webTechs array and mernStack array
webTechs.sort()
console.log(webTechs);
//mernStack
mernStack.sort()
console.log(mernStack);

// extract all the countries2 contain the word 'land' from the countries2 array and print it as array
function extractCountries2(keyword) {
    if (keyword == 'land') {
        console.log(countries2.filter((countries2) => countries2.endsWith('land')));
    }else {
        console.log('Country does not exists');
    }
    
}
extractCountries2('land')

//find the country containing highest number of characters in the countries2 array
let highest = '';
for (const item of countries2) {
    if (item.length > highest.length) highest = item
}
console.log(highest);

//extrct all the countries containing only four characters
let result1 = countries2.filter((n) => n.length == 4)
console.log(result1);

//Extract all the countries containing two or more words from the countries2 array and print the array
//i will appreciate solution to this problem???????

//Reverse the countries array and capitalize each country and stored it as an array 
let newCountries2 = [];
for (let i = 0; i < countries2.length; i++) {
    newCountries2.push((countries2[i].slice(0, 1).toUpperCase() + countries2[i].slice(1)))
   
}
console.log(newCountries2.reverse()); 
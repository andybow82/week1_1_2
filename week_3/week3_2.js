// LEVEL 2
//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5* b * h).
let base = parseInt(prompt('please Enter base of the triangle'))
let height = parseInt(prompt('Enter the height of the triangle'))
let areaOfTriangle = (0.5*base*height)
console.log(`The area of a triangle is ${areaOfTriangle}`)

//write a script that prompt the user to enter side a, side b, an side c of the triangle and calculate the perimeter of triangle(perimeter = a + b + c)
let A = parseInt(prompt('Enter value for side A'))
let B = parseInt(prompt('Enter value for side B'))
let C = parseInt(prompt('Enter value for side C'))
let perimeter = (A+ B +C)
console.log(`The perimeter of the triangle is ${perimeter}`);

//Get the length and width using using prompt and calculate  an area of rectangle (area= length * width and the perimenter of rectangle (perimeter = 2 *(length + width)))
//Area of rectangle
let length = parseInt(prompt('Enter value for length '))
let width = parseInt(prompt('Enter value for width '))
let sum = 2*(length + width)
console.log(`The perimeter of ${length} and ${width} is ${sum}`);

//Get radius using prompt and calculate the area of a circle (area = pi * r* r) and circumference of a circle (c = 2 * pi * r) where pi = 3.14.
//Area of circle
const PI = parseFloat(prompt('Enter value for PI'))
let r = parseInt(prompt('Enter value for radius'))
let circumference = 2*PI*r 
let area = PI*r*r
console.log(`The area of the circle is ${area}`);

//Calculate the slope, x-intercept and y-intercept of y = 2x -2
// y = mx + b, where m => slope.
let m = 2
console.log(m);

//slope is m = (y2-y1)/(x2-x1). Find the slope between point (2,2) and point (6,10)
let x1 = 2;
let x2 = 6;
let y1 = 2;
let y2 = 10;
let m2 = (y2-y1)/(x2-x1);
m2 = (10-2)/(6-2);
console.log(m2);

//Compare the slope of above two questions. (qtn 5&6)
//The Slope are the same


//Calculate the value of y(y = x**2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let x4 = - 3
let y4 = (-3*-3) + (-3*6) +9;
console.log(y4);


//Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person
let hours = parseInt(prompt('Enter hours'))
let ratePerHour = parseInt(prompt('Enter rate per hour'))
let weeklyEarning = hours*ratePerHour
console.log(`Your weekly earning is ${weeklyEarning}`);

//If the length  of name is greater than 7 say, your name is long else say your name is short.
let yourName = 'Andrew'
if (yourName.length > 7) {
    console.log('your name is long');
}else{
    console.log('your name is short');
}

// Compare your first name length and your family name length and should get this output.
// your first name, Andrew is longer than your family name, Ojo
let firstName1 = 'Andybow'
let lastName1 = 'Ojo' 
firstName1.length
lastName1.length
console.log(`My first name, ${firstName1} is longer than my family, ${lastName1}`);

//Declare two variable myAge and yourAge and assign them inital values and myAge And yourage.
let myAge1 = 250
let yourAge = 25
let ageDiff = myAge1 - yourAge
console.log(`I am ${ageDiff} years older than you`);

//Using prompt get the year the user was born and if the user is 18 0r above 
//allow the user to drive if not tell te user to wait a certain amount of years.
let birthYear = prompt('Enter your year of birth: ')
let now3 = new Date()
let year2 = now3.getFullYear();
let age = year2 -birthYear
let waitingYear = 25 - age
if (age >= 25) {
    console.log(`You are ${age}. You are old enough to drive`);
}else if (age < 25) {
    console.log(`You are ${age}. You will be allowed to drive after ${waitingYear} years.`);
}

//write  a script that prompt the user to enter number of years. 
//Calculate the number of seconds a person can live. Assuming some one lived just hundres years.
let usedYear = prompt('Enter the number of years you lived: ');
let oneYear = 60 * 60 * 24 * 365
let yearInSecond = usedYear * oneYear  
console.log(`You lived ${yearInSecond} seconds.`);


//Create a human readable time format using the date time object
//i. YYYY-MM-DD HH:mm
//ii. DD-MM-YYYY HH:mm
//iii. DD/MM/YYYY HH:mm
const now4 = new Date()
const year5 = now4.getFullYear()
const month4 = now4.getMonth() + 1
const date4 = now4.getDate()
const hours4 =  now4.getHours()
const minutes4 = now4.getMinutes()
console.log(`${year5}-${month4}-${date4} ${hours4} : ${minutes4}`);
console.log(`${date4}-${month4}-${year5} ${hours4} : ${minutes4}`);
console.log(`${date4}/${month4}/${year5} ${hours4} : ${minutes4}`);

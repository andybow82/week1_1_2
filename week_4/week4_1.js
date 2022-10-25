//Exercise: Level 1
//Get user input using prompt("Enter your age: "). If user is 18 0r older, give feedback: 'You are old enough to drive' but if not 18 give another feedback stating to wait for years he needs to turn 18.
let urAge = prompt("Enter your age: ")
let qlfyAge = 18
let ageDiff = qlfyAge - urAge
if (urAge >= 18) {
    console.log('You are old enough to drive');
}else{  
   console.log(`You are left with ${ageDiff} years to drive`); 
}


// Compare the value of myAge and yourAge using if...else. Based on the comparison and log the result to console stating who is older ( me or you). Use prompt ("Enter your age: ") to get the age as input 
let myAge = prompt("Enter my age: ")
let yourAge = prompt("Enter your age: ")
let you = yourAge - myAge
let me = myAge - yourAge
if (yourAge > myAge) {
    console.log(`You are ${you} years older than me`);
}else{
    console.log(`I am ${me} years older than you`);
}

//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
//i using if else
// termary operator.
// if function
let a = 4
let b = 3
if (a > b) {
   console.log(`${a} is greater than ${b}`)
}else {
    console.log(`${a} is less than ${b}`);
}

//termary operator
let a1 = 4
let b1 = 3
let c = a > b
?console.log(`${a1} is greater than ${b1}`)
:console.log(`${a1} is less than ${b1}`);

//Even numbers are divisible by 2 and the remainder is zero. How do you check , if a number is even or not using Javascript
let number = prompt('Enter a number: ');
if(number % 2 == 0) {
    console.log(`${number} is an even number`);
}else{
    console.log(`${number} is an odd number`);
}



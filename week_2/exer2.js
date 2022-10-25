//quote challenge
let quote = "\The quote\ 'There is no exercise better for the heart than reaching down and lifting people up.' by John Homles teaches us to help one another."
console.log(quote);

let paragraph = "\"Love is not patronizeing and charity isn\'t about pity, it is about love. Charity and love are the same\ -- with charity you give love, so don\'t just give money but reach out your hand insread.\""
console.log(paragraph);
// typeOf'10' is a string type while typeOf 10 is a number type so thry are not equal. To make it equal, here is he solution below!
 let num = '10'
 let numInt = +num
 console.log(numInt);
//parseFloat(9.8) is not equal to 10, to do that here is the step below!
let num1 = '9.8'
let numFloat = parseFloat(num1)
console.log(Math.round(numFloat));

// check challenge
let string4 = "python, jargon"
console.log(string4.includes('on'));

let sentence4 = 'I hope this course is not full of jargon.'
console.log(sentence4.includes('jargon'));

//random number inclusive
let randomNum = Math.random()
let numBtnZeroAndOneHundred = randomNum * 101
let randomNumRoundToFloor = Math.floor(numBtnZeroAndOneHundred)
console.log(randomNumRoundToFloor);

// let randomNum2 = Math.random((max-min) + min);
// let numBtnFiftyAndOneHundred =randomNum2 * min
// let randomNum2RoundToFloor = Math.floor(numBtnFiftyAndOneHundred)
// console.log(randomNum2RoundToFloor);

let randomNum3 = Math.random()
let numBtnZeroAndTwoHundredFiftyFive = randomNum * 256
let randomNum3RoundToFloor = Math.floor(numBtnZeroAndTwoHundredFiftyFive)
console.log(randomNum3RoundToFloor);

//random number for 'JavaScript"
let randomNum4 = Math.random()
let numBtnZeroAndNine= randomNum4 * 10
let randomNum4RoundToFloor = Math.floor(numBtnZeroAndNine)
console.log(randomNum4RoundToFloor);
//Escape characters
console.log('1\t1\t1\t1\t1');
console.log('2\t1\t2\t4\t8');
console.log('3\t1\t3\t9\t27');
console.log('4\t1\t4\t16\t64');
console.log('5\t1\t5\t25\t125');

//Slice out
let sentence2 = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence2.slice(31,54));

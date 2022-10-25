let number = '30'
let day = 'Days'
let preposition = 'of'
let JS ='JavaScript'
let sentence = `${number} ${day} ${preposition} ${JS}`
console.log(sentence);

console.log(sentence.length);

console.log(sentence.toUpperCase());

console.log(sentence.toLowerCase());

console.log(sentence.substring(0,2));

console.log(sentence.slice(3,7));

console.log(sentence.includes('Script'));

console.log(sentence.split());

console.log(sentence.split(''));

let socialMedia = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(socialMedia.split());

console.log(sentence.replace('JavaScript', 'Python'));

console.log(sentence.charAt(15));

console.log(sentence.charCodeAt('J'));

console.log(sentence.indexOf('a'));

console.log(sentence.lastIndexOf('a'));

let string = 'You cannot end a sentence with because because because is a conjunction'
console.log(string.indexOf('because'));

console.log(string.lastIndexOf('because'));

console.log(string.search('because'));

console.log(sentence.trim(' '));
//Boolean at work
console.log(sentence.startsWith('30'));

console.log(sentence.endsWith('Script'));

console.log(sentence.match(/a/gi));
//concat method
let string2 = '30 Days of'
console.log(string2.concat(' JavaScrip'));
//so repeat is possible
console.log(sentence.repeat('2'));
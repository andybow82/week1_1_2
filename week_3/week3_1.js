//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types
let firstName = "Andrew"
let country = 'Canada' 
let isMarried = true 
let year1 = 2022
console.log(typeof firstName);
console.log(typeof country);
console.log(typeof isMarried);
console.log(typeof year1);

//check if type of '10 is equal to 10
let value = '10'
let value1 = 10
console.log(value === value1);


//check if type of ('9.8) is equal to 10
let num = parseInt('9.8')
let num1 = 10
console.log(num == num1);

//Boolean value is either true or false
//i. write three JavaScript statement which provide truthy value
//ii. write three JavaScript statement which provide falsy value
//Truthy values
let num2 = 10
let stateOfResident = 'Lagos'
let sheMarried = true

//Falsy values
let num3;
let myAge = null
let isMarried2 = false

//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
let i = 4>3   // true
let ii = 4>= 3 //true
let iii = 4<3 //false
let iv = 4<=3 //false
let v = 4 == 4 // true
let vi = 4 === 4 // true
let vii = 4 != 4 //false
let viii = 4!== 4 //false
let ix = 4!='4' // false
let x = 4 == '4'// true
let xi = 4 ==='4' //false

console.log(i);
console.log(ii);
console.log(iii);
console.log(iv);
console.log(v);
console.log(vi);
console.log(vii);
console.log(viii);
console.log(ix);
console.log(x);
console.log(xi);

//find the length of python and jargon and make a falsy comparison statement.
let py = 'python'
let jg = 'jargon'
console.log((py.length) !== (jg.length));

//Figure out the result of the following expresion first without using console.log(). After you decide the result confirm it by using consle.log()
let a = 4>3 && 10<12 //true
let b = 4>3 && 10 >12 //false
let c = 4>3 || 10<12 // true
let d = 4>3 || 10>12 //true
let e = !(4>3) //false
let f = !(4<3) //true
let g = !(false) //true
let h = !(4>3 && 10<12) //false
let I = !(4>3 && 10>12) //true
let j = !(4 === '4') //true

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(I);
console.log(j);
//There is no 'on' in both dragon and python
let dn = 'dragon'
let pn = 'python'
console.log(dn.includes('on') && (pn.includes('on')));

//using the Date object to do the following activities
const now = new Date()
let month = now.getMonth() + 1;
let date = now.getDate();
let day = now.getDay()
let year = now.getFullYear()
let hour = now.getHours()
let minutes = now.getMinutes()

console.log(now.getFullYear());
let newMonth = month
console.log(newMonth);
console.log(now.getDate())
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());


//Find out the number of seconds elapsed from January 1, 1970 to now
const now5 = new Date()
console.log(now5.getTime());

//count challenge
let paragraph3 = 'Love is best thing in this world. Some found their love and some are stiill looking for their love.'
console.log(paragraph3.match(/love/gi));

let sentence3 = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence3.match(/because/gi));

let special = '%I $am@% a %tea@her%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavascript &is al@so $the $resu@lt of &love& of tea&ching.' 
let patter = special.replace(/[^a-zA-Z0-9 ]/g, '');
console.log(patter);

//calculation 
let currency = 'euro'
let salary = (5000)*12
let Bonus = 10000
let onlineCourses = (15000)*12
let totalAnnualIncome = salary+ Bonus +onlineCourses +  currency
console.log(totalAnnualIncome);
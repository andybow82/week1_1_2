//Exercis4_3
//Write a program which tells the number of days in a month.
//enter a month: january.... January has 31 days
//enter a month: JANUARY.... January has 31 days
//enter a month: February.... February has 28 days
//enter a month: FEbruary.... February has 28 days

let a5 = prompt('Enter the month: ')
let b5 = a5.charAt(0).toUpperCase()
let c5 = a5.slice(1, a5.length).toLowerCase()
let month1 = (b5 + c5)
if (month1 === 'January' || month1 === 'Match' || month1 === 'May' || month1 === 'July' || month1 === 'August' || month1 === 'October' || month1 === 'December') {
    console.log(`${month1} has 31 days`);
}else if (month1 === 'April' || month1 === 'June' || month1 === 'September' || month1 === 'November') {
    console.log(`${month1} has 30 days`);
 
}else if (month1 ==='February'){
    console.log(`${month1} has 28 days`);
}else{
    console.log("");
}
//1. Write a program which tells the number of days un a month, now consider leap years
let a6 = prompt('Enter the month: ')
let b6 = a6.charAt(0).toUpperCase()
let c6 = a6.slice(1, a6.length).toLowerCase()
let month2 = (b6 + c6)
if (month2 === 'January' || month2 === 'Match' || month2 === 'May' || month2 === 'July' || month2 === 'August' || month2 === 'October' || month2 === 'December') {
    console.log(`${month2} has 31 days`);
}else if (month2 === 'April' || month2 === 'June' || month2 === 'September' || month2 === 'November') {
    console.log(`${month2} has 30 days`);
}else if (month2%4 == 0){
    console.log(`${month2} has 29 days`);
}else{
    console.log(`${month2} has 28 days`);
}
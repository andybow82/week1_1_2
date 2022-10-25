//Exercise4_2
//Write a code which can give grades to students according to theirs scores:
let studentScore = 91
if (studentScore >= 90 && studentScore <= 100) {
    grade = "A"; 
}else if (studentScore >= 70 && studentScore < 90) {
    grade ="B";   
}else if (studentScore >= 60 && studentScore <70) {
    grade ="C";
}else if (studentScore >=50 && studentScore < 60) {
    grade = "D";
}else {
    grade = "F"
}
console.log(grade);

//Check if the season is autumn, winter, Spring or Summer. If the user input is:
let a4 =  prompt('Enter month: ');
let b4 = a4.charAt(0).toUpperCase()
let c4 = a4.slice(1, a4.length).toLowerCase()
let month =(b4 + c4)

if (month === 'September' || month === 'October' || month === 'November') {
    console.log( `${month} is Autumn.`);
}else if (month === 'December' || month === 'January' || month === 'February') {
    console.log(`${month} is Winter`);
}else if (month === 'March' || month === 'April' || month == 'May') {
    console.log(`${month} is Spring.`);
}else if (month === 'June' || month === 'July' || month === 'August') {
    console.log(`${month}  is Summer.`)
}else{
    console.log("");
}

//Check if a day is weekend day or a working day. Your script will take day as an input.
let dayUserInput = prompt('What day is today? ')
let b3 = dayUserInput.charAt(0).toUpperCase()
let c3 = dayUserInput.slice(1, dayUserInput.length).toLowerCase()
day = (b3 + c3)
switch (day) {
    case "Saturday":
    case "Sunday":
    console.log(` What is day today? ${day} is a weekend`);
        break;
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        console.log(`What is day today? ${day} is a working day`)
        break;
    default:
        console.log('Your input is not a day');
    
}
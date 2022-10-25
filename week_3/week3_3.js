//Execise: Level 3
//create a human readable tie format using the date time object. The hour and the inute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05)
//i. YYYY-MM-DD HHmm eg 2022-10-22 07:05
let dt = new Date();
let year6 = dt.getFullYear();
let month6 = (dt.getMonth() + 1).toString().padStart(2, "0");
let day6 = dt.getDate().toString().padStart(2, "0")
let hour6 = dt.getHours().toString().padStart(2, "0");
let minute = dt.getMinutes().toString().padStart(2, "0");
console.log(`${year6}-${month6}-${day6} ${hour6}:${minute}`);
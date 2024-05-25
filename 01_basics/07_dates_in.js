let myDate = new Date() //Date is object
console.log(myDate.toString ()); // 2024-05-25T11:05:43.487Z
console.log(myDate.toDateString()); // Sat May 25 2024
console.log(myDate.toLocaleDateString()); // 5/25/2024

let myCreatedDate = new Date(2024, 1, 1)
console.log(myCreatedDate.toDateString()); // Thu Feb 01 2024

let myCreatedDates = new Date("01-14-2023")
console.log(myCreatedDates.toLocaleString()); // 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()

console.log(myTimeStamp); // 1716636031991
console.log(myCreatedDates.getTime()); // 1673654400000 Get time in miliseconds
console.log(Math.floor(Date.now()/1000)) // 1716636380 Converting milisceconds time in second

let newDate = new Date()
console.log(newDate); // 2024-05-25T11:33:24.601Z
console.log(newDate.getMonth() + 1); // 5 Month start from "0" in javascript
console.log(newDate.getDay()); // 6 

newDate.toLocaleString('default', {
    weekday: "long"
})

console.log(newDate); // 2024-05-25T11:41:04.828Z Customize date

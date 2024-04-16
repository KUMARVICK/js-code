const score = 400
console.log(score); // 400

const balance = new Number(100); // define number specially like this
console.log(balance); // [Number: 100]

console.log(balance.toString().length); // 3 // convert number to string and find the length
console.log(balance.toFixed(2)); // 100.00 // convert number into decimal value 

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)); // 123.9 // give output in precision value give piriorty before decimal number

const hunderds = 100000000
console.log(hunderds.toLocaleString()); // 100,000,000 // give comma between number in in us region
console.log(hunderds.toLocaleString('en-IN')); // 10,00,00,000 // give comma in indian region

// +++++++++++++++++ Maths ++++++++++++++++++++++++++++++

console.log(Math);// Object [Math] {} // output coming like object

console.log(Math.abs(-4)); // 4 // convert negative number in positive and positive will be same as positive
console.log(Math.round(4.6)); // 5 // give round value
console.log(Math.ceil(4.2)); // 5 // give round value in up value
console.log(Math.floor(4.2)); // 4 // give round value in low value
console.log(Math.min(4, 3, 6, 8)); // 3 // give min value
console.log(Math.max(4, 3, 6, 8)); // 8 // give max value

console.log(Math.random()); // Always give value from 0 to 10
console.log(Math.floor(Math.random()* 10) + 1); // we multiply 10 because digit will be shift from left side decimal and 1 will be add now value will not be zero itwill be always come to range between 0 to 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // 17 // now value will be always come inside 10 to 20 and this is formula to find value between min and max range 
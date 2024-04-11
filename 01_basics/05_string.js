const name = "vicky"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) // to add the string or number // `` is use for string interpolation

const gameName = new String('vicky-hc')

console.log(gameName[0]); // v // find placed (o) is the key value
console.log(gameName.__proto__); // {} // getting object value and see in console tool

console.log(gameName.length); // 8
console.log(gameName.toUpperCase()); // VICKY-HC // getting uppercase value

console.log(gameName.charAt(2)); // c // second place value
console.log(gameName.indexOf('i')); // 1 // getting key value

const newString = gameName.substring(0,4)
console.log(newString); // vick // give range

const anotherString = gameName.slice(-8, 3)
console.log(anotherString); // vic // give negative range

const anotherStringOne = "    vicky   "
console.log(anotherStringOne); //     vicky   
console.log(anotherStringOne.trim()); // vicky // trim use for remove space

const url = "https://vicky.com/vicky%20kumar"

console.log(url.replace('%20', '-')); // https://vicky.com/vicky-kumar // replace the '%20' with '-'

console.log(url.includes('sundar')); // false // find 'sundar' are in this url
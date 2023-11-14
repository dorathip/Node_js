console.log("Hello World");
console.log(global)
//const math = require('./math')
const {add, sub, mul, div} = require('./math')

//console.log(math.add(3,5))
//console.log(math.sub(8,5))
//console.log(math.mul(3,5))
//console.log(math.div(10,5))

console.log(add(3,5))
console.log(sub(8,5))
console.log(mul(3,5))
console.log(div(10,5))

//We can't use Window object in Node.js instead we can use Global object
//We can't use import in Node.js instead we can use require
const os = require('os')
const path = require('path')
console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)
console.log("------------------")
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename))


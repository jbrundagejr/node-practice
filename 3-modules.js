const {jon, forrest, jamie} = require('./1-names')
const sayHi = require('./4-utils')
const {items, singlePerson} = require('./2-alternativeFlavor')
require('./5-mindGrenade')

console.log(items, singlePerson)
sayHi(jamie)
sayHi(jon)
sayHi(forrest)
const person = require('./person.js')

const message = () => `${person.name} is ${person.age} years old`;

module.exports = message
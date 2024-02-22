/* With commonjs */
//var generateName = require('sillyname');

/* Equivalent in Ecmascript */
import generateName from "sillyname";

var sillyName = generateName();

console.log('My name is ' + sillyName + '.');
// String Interpolation
console.log(`My name is ${sillyName}.`);
// console.log(`story ${name} story`);
// console.log('My name is',sillyName,'.');
/* We use this because using object like that generates a new space */
console.log('My name is',sillyName+'.');
console.log('My name is %s.',sillyName);
console.log('');

/* Superheroes Challenge */
import superheroes from "superheroes";

var name = superheroes.random();
console.log('/* Superheroes Challenge */');
console.log(`My name is ${name}!`);
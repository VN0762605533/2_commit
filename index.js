var dog = require('./dog');
var bone = require('./bone');

var Dog = new dog(' ky');
var Bone = new bone('Heo')
Dog.sayhi();
var dE = Dog.eat(Bone);
console.log(dE);
var dog = require('./dog');
var bone = require('./bone');

var Dog = new dog(' ky');
var Bone = new bone('Heo');
Dog.sayhi();
Dog.eat(Bone);
console.log(Dog.eat(Bone));
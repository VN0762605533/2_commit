var dog = require('./dog');
var bone = require('./bone');

var Dog = new dog(' ky');
var Bone = new bone('Heo',"khớp");
Dog.sayhi();
console.log(Dog.eat(Bone));
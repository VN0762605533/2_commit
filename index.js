var dog = require('./dog');
var bone = require('./bone');
var cat = require('./cat');
var mouse = require('./mouse');

var Dog = new dog(' ky');
var Bone = new bone('Heo');
Dog.sayhi();
Dog.eat(Bone);
console.log(Dog.eat(Bone));

var Cat = new cat('Tom', 'white');
var Mouse = new mouse('jerry', 'orange');

Mouse.sayhy();

Cat.eat(Mouse);
console.log(Cat.eat(Mouse));
var dog = require('./dog');
var bone = require('./bone');
var cat = require('./cat');
var mouse = require('./mouse');

var Dog = new dog(' ky');
var Bone = new bone();
Dog.sayhi();
Dog.eati(Bone.name);
console.log(Dog);


var Tom = new cat('Tom', 'white');
var Jerry = new mouse('jerry', 'orange');

Jerry.sayhy();
Tom.sayhii();

Tom.eat(Jerry);
console.log(Tom);
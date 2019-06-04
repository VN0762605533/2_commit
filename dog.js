var chalk = require('chalk');

function dog(name) {
	this.name = name;
	this.stomach = [];
}

dog.prototype.eat = function(bone) {
	this.stomach.push(this.bone);
}

dog.prototype.sayhi = function() {
	console.log('Hi, i\'m a dog' + chalk.red( this.name));
}

module.exports = dog;
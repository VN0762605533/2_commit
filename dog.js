var chalk = require('chalk');

function dog(name) {
	this.name = name;
	this.stomach = [];
}

dog.prototype.eati = function(bone) {
	this.stomach.push(bone);
}

dog.prototype.sayhi = function() {
	console.log('Hi, i\'m a dog' + chalk.red( this.name));
}

module.exports = dog;
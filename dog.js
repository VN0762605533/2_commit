function dog(name) {
	this.name = name;
	this.stomach = [];
}

dog.prototype.eat = function(bone) {
	this.stomach.push(bone);
}

module.exports = dog;
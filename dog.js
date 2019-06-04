function dog() {
	this.stomach = [];
}

dog.prototype.eat = function(bone) {
	this.stomach.push(bone);
}

module.exports = dog;
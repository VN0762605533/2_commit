function cat(name, color) {
	this.name = name;
	this.color = color;
	this.stomach = [];
};

cat.prototype.eat = function (mouse) {
	this.stomach.push(mouse);
}

module.exports = cat;
function cat(name, color) {
	this.name = name;
	this.color = color;
	this.stomach = [];
};

cat.prototype.eat = function (mouse) {
	this.stomach.push(mouse);
}
cat.prototype.sayhii = function() {
	console.log(this.name + ' xin chào các bạn!, tôi có màu ' + this.color);
}

module.exports = cat;
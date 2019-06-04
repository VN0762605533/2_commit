var chalk = require('chalk');

function cat(name, color) {
	this.name = name;
	this.color = color;
	this.stomach = [];
};

cat.prototype.eat = function (mouse) {
	this.stomach.push(mouse);
}
cat.prototype.sayhii = function() {
	console.log(this.name + ' xin chào các bạn!, tôi có màu ' + chalk.rgb(255,255,255)(this.color));
}

module.exports = cat;
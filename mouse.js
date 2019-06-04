function mouse(name, color) {
	this.name = name; 
	this.color  = color;
	this.stomach = [];
};

mouse.prototype.sayhy = function() {
	console.log(this.name + ' xin chào các bạn!, tôi có màu ' + this.color);
}

module.exports = mouse;
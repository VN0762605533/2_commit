function horse(name) {
	this.name = name;
};

horse.prototype.run = function () {
	console.log('Running....');
}

module.exports = horse;
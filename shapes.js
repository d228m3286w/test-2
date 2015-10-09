

exports.Shape = function(name, color) {
	this.name = name;
	this.color = color;
	this.getColor = function(){
		return color;
		}
};




exports.Shape2d = function(name, color, radius, diameter){
	exports.Shape.call(this, name, color);
	this.radius = radius;
	this.getRadius = function(){
		return radius;
	}
	this.getDiameter = function(){
		return radius * 2;
	}
	this.getArea = function(){
		return Math.PI * this.radius * 2;
	}
};

exports.Shape2d.prototype = Object.create(exports.Shape.prototype);
exports.Shape2d.prototype.constructor = exports.Shape2d;	

exports.Circle = function(name, color, radius){
	exports.Shape2d.call(this, name, color, radius);
	
};
	
exports.Circle.prototype = Object.create(exports.Shape2d.prototype);
exports.Circle.prototype.constructor = exports.Circle;



exports.Shape3d = function(name, color){
	exports.Shape.call(this, name, color);
	this.color = color;
}

exports.Shape3d.prototype = Object.create(exports.Shape.prototype);
exports.Shape3d.prototype.constructor = exports.Shape3d;

exports.Cube = function(name, color, volume){
	exports.Shape3d.call(this, name, color);
	
	this.getVolume = function() {
		return volume * volume * volume;

	}


}
exports.Cube.prototype = Object.create(exports.Shape3d.prototype);
exports.Cube.prototype.constructor = exports.Cube;





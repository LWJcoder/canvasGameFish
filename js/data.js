var dataObj = function(){
	this.fruitNum = 0;
	this.double = 1;
	this.score = 0
}

dataObj.prototype.reset = function(){
	this.fruitNum = 0;
	this.double = 1;
}

dataObj.prototype.draw = function(){
	var can1W = can1.width;
	var can1H = can1.height;

	ctx1.fillStyle = 'white'
	ctx1.font = '30px Verdana'
	ctx1.textAlign = 'center'
	ctx1.fillText('score: ' +this.score, can1W * 0.5,   can1H-80)
}

dataObj.prototype.addScore = function(){
	this.score += this.fruitNum*100*this.double;
	this.double = 1;
	this.fruitNum = 0
	console.log(this.score);
}
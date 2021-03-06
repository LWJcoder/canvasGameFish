var dataObj = function(){
	this.fruitNum = 0;
	this.double = 1;
	this.score = 0;
	this.alpha = 0;
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

	if (gameOver) {
		this.alpha  += deltaTime * 0.0005;
		ctx1.fillStyle = 'rgba(255, 255, 255,' + this.alpha + ')'
		ctx1.fillText('GAMEOVER ' , can1W * 0.5,   can1H * 0.5)
	}
}

dataObj.prototype.addScore = function(){
	this.score += this.fruitNum*100*this.double;
	this.double = 1;
	this.fruitNum = 0
	console.log(this.score);
}
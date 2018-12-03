//大鱼
var momObj = function(){
	this.x ;
	this.y;
	this.angle;
	// this.eye = new Image()
	this.bodyImg = new Image()
	// this.tail = new Image()
	this.countTime = 0
	this.tailCount = 0
	this.eyeCount = 0
	this.eyeTime = 0
	this.eyeInterval = 1000
}

momObj.prototype.init = function(){
	this.x = parseInt(imgWidth) * 0.5;
	this.y = parseInt(imgHeight) * 0.5;
	this.angle = 0;
	// this.eye.src = './src/bigEye0.png'
	this.bodyImg.src = './src/bigSwim0.png'
	// this.tail.src = './src/bigTail0.png'

}


momObj.prototype.draw = function(){
	this.x = lerpDistance(mx, this.x, 0.98)
	this.y = lerpDistance(my, this.y, 0.9)

	var delataY =my - this.y,
		deltaX = mx - this.x;

	//获得反正切 + 一个Pi的角度
	var beta =  Math.atan2(delataY, deltaX) + Math.PI;

	//把角度调整, 使鱼能跟随鼠标旋转
	this.angle = lerpAngle(beta, this.angle, 0.6)
	
	this.countTime += deltaTime

	//尾巴
	if(this.countTime > 50){
		this.countTime %= 50
		this.tailCount  = (this.tailCount+1) % 8
	}

	this.eyeTime += deltaTime
	if (this.eyeTime > this.eyeInterval) {
		this.eyeCount += 1
		this.eyeCount %= 2

		this.eyeTime %= this.eyeInterval
		if (this.eyeCount == 0) {
			this.eyeInterval = Math.random() * 1000 + 2000
		}else{
			this.eyeInterval = 200
		}


	}

	ctx1.save();	
	// console.log( lerpDistance(mx, this.x, 0.98))
	ctx1.translate( this.x , this.y );
	ctx1.rotate(this.angle)
	ctx1.drawImage(babyEye[this.eyeCount], -babyEye[this.eyeCount].width*0.5, -babyEye[this.eyeCount].height * 0.5)
	ctx1.drawImage(this.bodyImg, -this.bodyImg.width*0.5, -this.bodyImg.height * 0.5)
	ctx1.drawImage(bigTail[this.tailCount], -bigTail[this.tailCount].width*0.5 + 30, -bigTail[this.tailCount].height * 0.5)
	ctx1.restore()

	momFruitCol()
}
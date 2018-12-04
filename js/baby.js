//小鱼
var babyObj = function(){
	this.x ;
	this.y;
	this.angle;
	// this.babyEye = new Image()
	this.babyBody = new Image()
	// this.babyTail = new Image()
	this.bodyCount = 0;
	this.bodyTimer = 0;

	this.tailTime = 0;
	this.tailCount = 0

	this.babyEyeTime=0;
	this.babyInterval = 1000;
	this.babyEyeCount = 0;
}

babyObj.prototype.init = function(){
	this.x = parseInt(imgWidth) * 0.5 - 50;
	this.y = parseInt(imgHeight) * 0.5 + 50;
	this.angle = 0;
	// this.babyEye.src = './src/babyEye0.png'
	// this.babyBody.src = './src/babyFade0.png'
	// this.babyTail.src = './src/babyTail0.png'
	
}


babyObj.prototype.draw = function(){

	this.x = lerpDistance(mom.x, this.x, 0.98)
	this.y = lerpDistance(mom.y, this.y, 0.9)

	var delataY =mom.y - this.y,
		deltaX = mom.x - this.x;


	

	this.bodyTimer += deltaTime;

	if (this.bodyTimer > 300) {
		this.bodyTimer  %= 300
		this.bodyCount += 1
		if (this.bodyCount > 19) {
			//game over
			this.bodyCount = 19
			gameOver = true
		}
	}


	
	this.tailTime += deltaTime

	//尾巴
	if(this.tailTime > 50){
		this.tailTime %= 50

		this.tailCount  = (this.tailCount+1) % 8;

	}
	
	this.babyEyeTime += deltaTime;
	if (this.babyEyeTime > this.babyInterval) {
		this.babyEyeCount =  (this.babyEyeCount + 1) % 2;
		this.babyEyeTime %= this.babyInterval

		if (this.babyEyeCount == 0) {
			this.babyInterval = Math.random() * 1500 + 2000 // 眨眼之后
		}else{
			this.babyInterval = 200
		}
	}

	//获得反正切 + 一个Pi的角度
	var beta =  Math.atan2(delataY, deltaX) + Math.PI;

	//把角度调整, 使鱼能跟随鼠标旋转
	this.angle = lerpAngle(beta, this.angle, 0.6)
	ctx1.save();
	var count = this.bodyCount;
	ctx1.translate(this.x, this.y)
	ctx1.rotate(this.angle)
	ctx1.drawImage(bigTail[this.tailCount], -bigTail[this.tailCount].width*0.5 + 23, -bigTail[this.tailCount].height*0.5)
	ctx1.drawImage(babyBody[count], -babyBody[count].width*0.5, -babyBody[count].height*0.5)
	ctx1.drawImage(babyEye[this.babyEyeCount], -babyEye[this.babyEyeCount].width*0.5, -babyEye[this.babyEyeCount].height*0.5)
	ctx1.restore()

}
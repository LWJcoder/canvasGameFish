// var length = 20;

function fruitObj (){
	this.x = [];
	this.y = [];
	this.num = 20;
	this.alive = [];
	this.l = [];
	this.spd = [];
	this.fruitType =[]
	this.orange = new Image();
	this.blue = new Image()

}

fruitObj.prototype.init = function (){

	for (var i = 0; i < this.num; i++) {
		this.x[i] = 0
		this.y[i] = ane.len[i] 
		this.spd[i] = 0
		this.alive[i] = false
		this.born(i)
	}

	this.orange.src = './src/fruit.png';
	this.blue.src = './src/blue.png';
}

fruitObj.prototype.born = function(i){
	var aneID = Math.floor(Math.random() * ane.num)
	this.x[i] = ane.x[aneID];
	this.y[i] = imgHeight - ane.len[aneID]
	//生长速度
	this.l[i] = 0
	this.spd[i]  = Math.random() * 0.017 + 0.003; //[0.003, 0.02]
	//blue || orange
	this.fruitType[i] = (Math.random() < 0.2 ? "blue": "orange")
	this.alive[i]  = true
}

fruitObj.prototype.draw = function(){
	for (var i = 0; i < this.num; i++) {
		var pic = this.fruitType[i] == "blue" ? this.blue : this.orange;

		if (this.l[i] <= 10) {
			this.l[i] += this.spd[i] * deltaTime 
		}else{
			this.y[i] -= this.spd[i] * 7 * deltaTime;
		}
		// console.log(this.l[i])
																								//width		height	
		ctx2.drawImage(pic, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i]  * 0.5,  this.l[i],  this.l[i])
		// ctx2.drawImage(blue, this.x[i], this.y[i], 10,10 )
		
		if(this.y[i] <= 10){
			this.alive[i] = false
		}
	}


}


	// fruitAlive()
function fruitAlive(){
	// console.log(fruit)
	var aliveNum = 0;
	for (let i = 0; i < fruit.num; i++) {
		if(fruit.alive[i]){
			aliveNum++;
		}
	}

	if (aliveNum < 15 ) {
		sendFruit()
		return
	}
}

function sendFruit(){
	for (let i = 0; i < fruit.num; i++) {
		if (!fruit.alive[i]){
			fruit.born(i)
			console.log(i)
		}
	}
}

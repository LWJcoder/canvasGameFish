//判断鱼鱼果实是否碰撞

function momFruitCol(){
	for (var i = 0; i < fruit.num; i++) {
		if (fruit.alive[i])
			if (calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y) < 900){
				console.log('碰撞')
				//30 * 30 区域为可以碰撞区域
				fruit.dead(i)
				if (fruit.fruitType[i] == "blue") {
					data.double = 2
				}
				data.fruitNum++;
			} 
	}
	
}

function calLenMomBaby(){
	var len = calLength2(mom.x, mom.y, baby.x, baby.y)
	
	if (len < 900) {
		baby.bodyCount = 0
		// data.reset()
		data.addScore()
	}
	

	data.draw()
	

}
var can1, can2, ctx1, ctx2;
var imgWidth = 0, imgHeight = 0;	
var bgImg = new Image();
var ane, fruit, mom, baby;
var deltaTime = 0, lastTime = Date.now();
var mx = 0, my = 0;
var babyBody = []
var bigTail = []
var babyEye = []
var babyTail = []
var data;
var gameOver = false;


document.body.onload = game;

function game(){
	init()
	gameloop()
}


function init(){
	// 获得context
	can1 = document.getElementById('cvs1')
	can2 = document.getElementById('cvs2')
	ctx1 = can1.getContext('2d')
	ctx2 = can2.getContext('2d')

	bgImg.src = './src/background.jpg';

	imgWidth = can1.width;
	imgHeight = can1.height;
	ane = new aneObj()
	ane.initAne()
	
	fruit = new fruitObj();
	fruit.init()

	can1.addEventListener('mousemove', onMouseMove, false);

	mom = new momObj()
	mom.init()

    data = new dataObj()
	baby = new babyObj();
	baby.init()

	for (var i = 0; i < 20; i++) {
		babyBody[i] = new Image();
		babyBody[i].src = './src/babyFade'+ i +'.png'
	}

	for (var i = 0; i < 8; i++) {
		bigTail[i] = new Image();
		bigTail[i].src = './src/bigTail'+ i +'.png'
	}

	for (var i = 0; i < 2; i++) {
		babyEye[i] = new Image()
		babyEye[i].src = "./src/babyEye" + i + '.png'
	}


}


function gameloop(){
	window.requestAnimFrame(gameloop)
	drawImage()
	
	let nowTime = Date.now();
	deltaTime = nowTime - lastTime;


	lastTime = nowTime;
	if (deltaTime > 40) {
		deltaTime = 40
	}

	ane.drawAne()
	// console.log('loop')

	fruitAlive()
	fruit.draw()

	ctx1.clearRect(0, 0, imgWidth, imgHeight)
	mom.draw()

	baby.draw()
	calLenMomBaby()

}


function onMouseMove(e){
	if (!gameOver) 
		if (e.layerX || e.offSetX) {
			mx = (e.offSetX == undefined ? e.layerX: e.offSetX )
			my = (e.offSetY == undefined ? e.layerY: e.offSetY )
		}

}
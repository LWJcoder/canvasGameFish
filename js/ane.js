// ane 背景 海葵
var margin = 16, //间距
	aneWidth = 20; //宽度

var aneObj = function(){
	this.x = [];
	this.len = [];
	this.num = 50  //数量
} 

aneObj.prototype.initAne = function(){
		for (let i = 0; i < this.num; i++) {
			this.x[i] = i * margin + Math.random() * 20;
			this.len[i] = 200 + Math.random() * 50;
		}
		
}


// 绘制
aneObj.prototype.drawAne = function(){
	ctx2.save();
	ctx2.globalAlpha = 0.6;
	ctx2.strokeStyle = '#3b154e';//
	ctx2.lineWidth = 20;
	ctx2.lineCap = 'round';

	for (let i = 0; i < this.num; i++) {
		ctx2.beginPath();
		ctx2.moveTo(this.x[i], imgHeight);
		ctx2.lineTo(this.x[i], imgHeight - this.len[i]);
		ctx2.stroke();
		// console.log(this.x[i], imgHeight - this.len[i]);
	}

	ctx2.restore();
}

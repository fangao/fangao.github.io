/** 源码
var cwidth = Math.floor(document.getElementsByTagName('header')[0].offsetWidth/5)*5;
var cheight = Math.floor(document.getElementsByTagName('header')[0].offsetHeight/5)*5;
var csize = 5;
var canvas = document.getElementById('gameoflife');
canvas.width = cwidth;
canvas.height = cheight;
var ctx = canvas.getContext('2d');
var cells = new Array();
var scount;

init();

function init(){
	ctx.fillStyle="#2e7bcf";
	ctx.fillRect(0,0,cwidth,cheight);
	for(var y=0; y<cheight/csize; y++){
		cells[y] = new Array();
		for(var x=0; x<cwidth/csize; x++){
			cells[y][x] = Math.round(Math.random()*0.56);
		}
	}
	getNewL();
}

function getNewL(){
	var ncells = new Array();
	for(var y=0; y<cheight/csize; y++){
		ncells[y] = new Array();
		for(var x=0; x<cwidth/csize; x++){
			ncells[y][x] = getState(x, y);
		}
	}
	cells = ncells;
	showCells();
	scount = setTimeout(getNewL, 200);
}

function getState(x, y){
	var n = 0
	for(var ty=y-1; ty<=y+1; ty++){
		for(var tx=x-1; tx<=x+1; tx++){
			if(ty<0 || tx<0 || ty>=cheight/csize || tx>=cwidth/csize){
				continue;
			}
			n += cells[ty][tx];
		}
	}
	n -= cells[y][x];
	if(n==3){
		return 1;
	}
	else if(n==2){
		return cells[y][x];
	}
	else{
		return 0;
	}
}

function showCells(){
	for(var y=0; y<cheight/csize; y++){
		for(var x=0; x<cwidth/csize; x++){
			if(cells[y][x]){
				ctx.fillStyle="#61a0e4";
			}
			else{
				ctx.fillStyle="#2e7bcf";
			}
			ctx.fillRect(x*csize,y*csize,csize,csize);
		}
	}
}

window.onresize = function (){
	clearTimeout(scount);
	cwidth = Math.floor(document.getElementsByTagName('header')[0].offsetWidth/5)*5;
	cheight = Math.floor(document.getElementsByTagName('header')[0].offsetHeight/5)*5;
	canvas.width = cwidth;
	canvas.height = cheight;
	init();
}
**/

var cwidth = Math.floor(document.getElementsByTagName('header')[0].offsetWidth/5)*5;
var cheight = Math.floor(document.getElementsByTagName('header')[0].offsetHeight/5)*5;
var csize = 5;
var canvas = document.getElementById('gameoflife');
canvas.width = cwidth;
canvas.height = cheight;
var ctx = canvas.getContext('2d');
var cells = new Array();
var scount;
var Words1 = ['> ','某','人','醒','来','发','现','自','己','知','道','了','宇','宙','所','有','的','秘','密'];
var Words2 = ['> ','世','界','的','尽','头','在','哪','，','人','被','赋','予','的','使','命','，','人','生','的','意','义','，','真','神','究','竟','是','哪','一','个'];
var Words3 = ['> ','等','等','等','等'];
var Words4 = ['> ','他','想','找','个','人','把','他','的','想','法','阐','述','出','来','，','结','果','开','口','发','现','所','有','文','字','都','化','为','了'];
var Words5 = ['> ','Hodor!'];
var WelcomeWords =[Words1,Words2,Words3,Words4,Words5];
init();

function init(){
	//scount =0;
	ctx.fillStyle="#2e7bcf";
	ctx.fillRect(0,0,cwidth,cheight);
	for (var i = 0; i <=WelcomeWords.length; i++) {
		scount = 0;
		getNewL(WelcomeWords[i],i);
	};
}

function getNewL(word,line){
	if (scount>=word.length) {
		return;
	}
	else{
		ctx.fillStyle = "white";
		ctx.font = 12+"pt";
		ctx.fillText(word[scount], 220+scount*14,20*(line+1));
		scount++;
	}
	setTimeout(getNewL,1000);

}

// function getNewL(){
// 	var ncells = new Array();
// 	for(var y=0; y<cheight/csize; y++){
// 		ncells[y] = new Array();
// 		for(var x=0; x<cwidth/csize; x++){
// 			ncells[y][x] = getState(x, y);
// 		}
// 	}
// 	cells = ncells;
// 	showCells();
// 	scount = setTimeout(getNewL, 200);
// }

// function getState(x, y){
// 	var n = 0
// 	for(var ty=y-1; ty<=y+1; ty++){
// 		for(var tx=x-1; tx<=x+1; tx++){
// 			if(ty<0 || tx<0 || ty>=cheight/csize || tx>=cwidth/csize){
// 				continue;
// 			}
// 			n += cells[ty][tx];
// 		}
// 	}
// 	n -= cells[y][x];
// 	if(n==3){
// 		return 1;
// 	}
// 	else if(n==2){
// 		return cells[y][x];
// 	}
// 	else{
// 		return 0;
// 	}
// }

// function showCells(){
// 	for(var y=0; y<cheight/csize; y++){
// 		for(var x=0; x<cwidth/csize; x++){
// 			if(cells[y][x]){
// 				ctx.fillStyle="#61a0e4";
// 			}
// 			else{
// 				ctx.fillStyle="#2e7bcf";
// 			}
// 			ctx.fillRect(x*csize,y*csize,csize,csize);
// 		}
// 	}
// }

window.onresize = function (){
	clearTimeout(scount);
	cwidth = Math.floor(document.getElementsByTagName('header')[0].offsetWidth/5)*5;
	cheight = Math.floor(document.getElementsByTagName('header')[0].offsetHeight/5)*5;
	canvas.width = cwidth;
	canvas.height = cheight;
	init();
}



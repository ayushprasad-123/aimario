s=0;
function preload() {
	world_start = loadSound("world_start.wav");
	jumpsound=loadSound("jump.wav");
	coinsound=loadSound("coin.wav");
	oversound=loadSound("gameover.wav");
	kicksound=loadSound("kick.wav");
	diesound =loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.hide();
	video=createCapture(VIDEO);
	video.size(600,400);
	video.parent('cam');
	canvas.parent("game");
	posenet=ml5.poseNet(video,onLoad);
	posenet.on('pose',onResult);
	instializeInSetup(mario);
}

function load(){
	if(s){
		s=0;
		canvas.hide();
		document.getElementById("start").innerHTML="Start Game";
	}else{
		s=1;
		canvas.show();
		document.getElementById("start").innerHTML="Pause Game";
	}
}

function reload(){
	window.location="index.html";
}

function draw() {
	game();
}
function onLoad(){}
function onResult(results){
	if(results.length>0){
		console.log(results);
		let n=results[0].pose.nose;
		nx=n.x;
		ny=n.y;
	}
}
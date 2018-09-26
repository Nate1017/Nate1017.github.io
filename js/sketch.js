function setup() {
  	createCanvas(windowWidth, windowHeight);
  	background(120);
}

function draw() {
	
	stroke(0, 255, 0);
	strokeWeight(20);
  	ellipse(windowWidth/2, windowHeight/2, mouseX, mouseY);
  	if (keyIsPressed){
  		fill(0, 0, 255);
  	}else{
  	fill(255, 140, 0);	
  	}
  	print(mouseIsPressed);
  	
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	background(120);
}
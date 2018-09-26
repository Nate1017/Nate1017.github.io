var canvas;

//screen text
var title;
var secondOption;
var firstOption;
var greeting;
var userName;

//inputs
var nameInput;

//animation variables
var sunX;
var sunY;

//booleans
var firstScreen;
var walkToSun;
var sunAnimate;
var walkToSun;



function setup(){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style("z-index", "-1");

	beginning();
}

function beginning(){
	background(0);
	greeting = createP("Please type your name and press enter");
	createElement("br");
	nameInput = createInput("Type your name here");
	nameInput.changed(startStory);
}

function startStory(){
	greeting.hide();
	nameInput.hide();

	userName.createElement('h1', nameInput.value());
	title = createElement('h1', "Get home before the sunsets");
	firstOption = createP("Walk towards the sun");
	secondOption = createP("Go home");

	firstOption.mousePressed(toSun);
	secondOption.mousePressed(toHome);

}

function draw(){
	if(walkToSun == true){
		toSunAnim();
	}
}

function toSun(){
	walkToSun = True;
	userName.html(nameInput.value());

	title.html('You walk towards the sun, it gets bigger');
	firstOption.html('walk closer');
	secondOption.html('control the sun');
}

//animation Function
function toSunAnim(){
	background(0);
	sunX = windowWidth/2;
	sunY = windowHeight/2;
	sunX = sunX + random(-5, 5);
	sunY = sunY + random(-3, 3);

	ellipse(sunX, sunY, 300, 300);

function toHome(){
	firstOption.hide();
	secondOption.hide();
	title.html('You have gone home. Good Night!');
}

function windowResize(){
	canvas = createCanvas(windowWidth, windowheight);
}
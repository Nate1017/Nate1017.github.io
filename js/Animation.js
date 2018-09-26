var canvas;

//screen text
var greeting;
var title;
var firstOption;
var secondOption;
var userName;

//inputs
var nameInput;

//animation variables
var sunX;
var sunY;

//boolean
var firstScreen;
var walkToPond;
var sunAnimate;
var walkCloser;

function setup(){

canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0,0);
canvas.style("z-index", "-1");

beginning();
}

function beginning(){
background(0);
greeting = createP("I'm lost...please guide me back home");
createElement("br");

nameInput = createInput("Please give me a name");
nameInput.changed(startStory);
}

function startStory(){
greeting.hide();
nameInput.hide();
userName = createElement('h1', nameInput.value());
title = createElement('h1', "I'm thirsty..lets head to the pond before we leave");

firstOption = createP("Doggy Pond");
secondOption = createP("Head Home");

firstOption.mousePressed(toPond);
secondOption.mousePressed(toHome);
}

function toPond(){
walkToPond = true;
userName.html(nameInput.value());

title.html('Thanks for taking me to the pond! Now Im ready to go home');
firstOption.html('Take doggy home');
secondOption.html("Head home instead");
firstOption.mousePressed(walkCloserToSun);
}


function toHome(){
	firstOption.hide();
	secondOption.hide();

title.html('you have gone home');
}

function walkCloserToSun(){
	walkToSun = false;
	walkCloser = true;

	userName.html(nameInput.value());
	firstOption.html('Go Home');
	secondOption.html('Fly away');

	sunSlider = createSlider(0, 255, 0);
}


function draw(){
	background(0);
}


function windowResized(){
	canvas = createCanvas(windowWidth, windowHeight);
}
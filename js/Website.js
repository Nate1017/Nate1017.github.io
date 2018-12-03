var canvas;

//screen text
var greeting;
var title;
var HS1title;
var endTitle;
var firstOption;
var secondOption;
var thirdOption;
var userName;
var Slidertitle;

//inputs
var nameInput;
var btn;
var ellipseSlider;

//animation variables
var sunX;
var sunY;

//boolean
var firstScreen;
var walkToPond;

var toHomeScene1Trig;
var toHomeScene2Trig;
var doggyImg;
var heartImg;



function setup(){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style("z-index", "-1");
	beginning();
}

function beginning(){
	background(0);
	greeting = createElement("h1","Hi hooman, please keep me happy");
	createElement("br");
	thirdOption = createButton("Just Leave...");
	nameInput = createInput("Please give me a name");
	nameInput.changed(startStory);
	thirdOption.mouseClicked(beginningSadPup);
}

function startStory(){
	nameInput.hide();
	thirdOption.hide();
	greeting.html("Thanks for the new name! I love it");
	firstOption = createButton("Next");
	firstOption.mouseClicked(toHomeScene1);
}

function toHomeScene1(){
	firstOption.hide();
	greeting.hide();
	HS1title = createElement("h1", "Hooman..I'm thirsty");
	ellipseSlider = createSlider(0, 10, 0);
	toHomeScene1Trig = true;
}

function toHomeScene2(){
	ellipseSlider.hide();
	HS2Title = createElement("h1", "I love you hooman, you're my best friend.");
	toHomeScene1Trig = false;
	toHomeScene2Trig = true;
	image(doggyImg, 200, 300, 300, 300);
	image(heartImg, 200, 300, 50, 50);
	firstOption.mouseClicked();
}

function beginningSadPup(){
	greeting.hide();
	thirdOption.hide();
	nameInput.hide();
	endTitle = createElement("h1", "Hooman make me sad..");

}

function draw(){
	background(0);

	if (toHomeScene1Trig == true){
		 toHomeScene1Amination();
	}else if(toHomeScene2Trig == true){
		toHomeScene2Animation();
	}
}

function toHomeScene1Amination(){
		background(0);
	if(ellipseSlider.value() > 5){
		HS1title.html("Too Much Water!");
	}else if(ellipseSlider.value() == 5){
		HS1title.html("Thanks!");
		toHomeScene2();
	}else{
		HS1title.html("I want more water please");
	}
}

function preload(){
	doggyImg = loadImage('./Pictures/Pup.jpg');
	//sadDogImg = loadImage('.Pictures/sadPuppy.jpg');
	heartImg = loadImage('./Pictures/heart.jpg');
}

function windowResized(){
	canvas = createCanvas(windowWidth, windowHeight);
}
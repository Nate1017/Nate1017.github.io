var canvas;

//screen text
var greeting;
var title;
var firstOption;
var secondOption;
var thirdOption;
var userName;

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
	firstOption = createButton("Just Leave...");
	firstOption.mousePressed(dead);
	nameInput = createInput("Please give me a name");
	nameInput.changed(startStory);
}

function startStory(){
	nameInput.hide();
	greeting.html("Thanks for the new name! I love it");
	firstOption = createButton("Pet Me");
	secondOption = createButton("Lets Head Home");

	firstOption.mousePressed(toPet);
	secondOption.mousePressed(toHomeScene1);
}

function toPet(){
	//add sound of dog barking
}

function toHomeScene1(){
	secondOption.hide();
	greeting.hide();
	title = createElement("h1", "Wait..I'm thirsty..I need water before we leave");
	ellipseSlider = createSlider(0, 10, 0);
	toHomeScene1Trig = true;
	
	// firstOption = createButton("Lets head home");
	// firstOption.hide();
	// firstOption.mousePressed(toHomeScene2);

function toHomeScene2(){
	toHomeScene1Trig = false;
	toHomeScene2Trig = true;
}

function toHomeScene3(){
	toHomeScene2Trig == false;
	toHomeScene3Trig == true;
}

function dead(){
	title.html("YOU KILLED ME !");
}

function draw(){
	background(0);

	if (toHomeScene1Trig == true){
		 toHomeScene1Amination();
	}else if(toHomeScene2Trig == true){
		toHomeScene2Animation();
	}else if(toHomeScene3Trig == true){
		toHomeScene3Animation();
	}
}

function toHomeScene1Amination(){
		background(0);
	if(ellipseSlider.value() > 5){
		title.html("Too Much Water! I'm drowning!");
	}else if(ellipseSlider.value() == 5){
		title.html("Perfect! Thank you, now I feel better.");
		//firstOption.show();
	}else{
		title.html("Not enough water..I'm still feeling dehydrated.");
	}
}

function toHomeScene2Animation(){
	background(0);
}

function toHomeScene3Animation(){
	background(0);
}

//loads before everything else
function preload(){

}


function windowResized(){
	canvas = createCanvas(windowWidth, windowHeight);
}
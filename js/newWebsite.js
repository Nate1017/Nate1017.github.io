var canvas;

//screen text
var greeting;
var title;
var HS1title;
var challenge1Description;
var homeScreenDescription;
var preChallenge1;
var endTitle;
var firstOption;
var secondOption;
var thirdOption;
var userName;
var Slidertitle;
var HS3title;
var goal;
var sadPup1text;
var sadPup1desc;
var sadPup3desc;

//sounds
var sadPupSound;
var happyPupSound;

//buttons
var challengeTwoButton;
var noName;
var challenge3Button;

//inputs
var careButton;
var btn;
var ellipseSlider;
var nameInput1;

//animation variables
var sunX;
var sunY;

//boolean
var firstScreen;
var walkToPond;

var toHomeScene1Trig;
var toHomeScene2Trig;

//pictures
var doggyImg;
var heartImg;
var tearsImg;
var deadImg;

function setup(){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style("z-index", "-1");
	beginning();
}

function beginning(){
	background(0);
	greeting = createElement("h1","Hi hooman, please keep me happy");
	homeScreenDescription = createElement("h2", "You have found a stray pup..what do you do?");
	goal = createElement("h2", "The goal is to be able to make the pup feel loved 3 times, one mistake and your pup will be sad and cry");
	createElement("br");
	thirdOption = createButton("Just Leave...");
	careButton = createButton("Take Care of Pup");
	careButton.mouseClicked(startStory);
	thirdOption.mouseClicked(beginningSadPup);
	image(doggyImg, 200, 300, 300, 300);
}

function startStory(){
	careButton.hide();
	thirdOption.hide();
	goal.hide();
	happyPupSound.play();
	greeting.html("I love you Hooman, I'll be the best pup ever");
	preChallenge1 = createElement("h2", "First challenge in taking care of your new pup")
	homeScreenDescription.hide();
	firstOption = createButton("Challenge 1");
	firstOption.mouseClicked(toHomeScene1);
}

function toHomeScene1(){
	firstOption.hide();
	greeting.hide();
	HS1title = createElement("h1", "Hooman..I'm thirsty");
	challenge1Description = createElement("h2", "You must give just enough water to the pup.")
	preChallenge1.hide();
	ellipseSlider = createSlider(0, 100, 0);
	toHomeScene1Trig = true;
}

function toHomeScene2(){
	happyPupSound.play();
	ellipseSlider.hide();
	challenge1Description.hide();
	HS2Title = createElement("h1", "I love you hooman, you're my best friend.");
	toHomeScene1Trig = false;
	toHomeScene2Trig = true;
	image(doggyImg, 200, 300, 300, 300);
	image(heartImg, 200, 300, 50, 50);
	challengeTwoButton = createButton("Challenge 2");
	challengeTwoButton.mouseClicked(toHomeScene3);
	firstOption.mouseClicked();
}

function toHomeScene3(){
	background(0);
	HS1title.hide();
	HS2Title.hide();
	challengeTwoButton.hide();
	noName = createButton("The pup doesn't need a name");
	noName.mouseClicked(sadPup2);
	HS3title = createElement("h1", "Hooman can you please give me a name?");
	nameInput = createInput("Enter pup name");
	nameInput.changed(toHomeScene3Animation);
	pupName1 = nameInput.value();
	image(doggyImg, 200, 300, 300, 300);
	image(heartImg, 200, 300, 50, 50);
}

function toHomeScene3Animation(){
	happyPupSound.play();
	HS3title.html("Thanks Hooman, please always remember me & I'll always be a good pup");
	noName.hide();
	nameInput.hide();
	challenge3Button = createButton("Challenge 3");
	challenge3Button.mouseClicked(Challenge3);
	image(heartImg, 200, 300, 50, 50);
	image(heartImg, 250, 250, 50, 50);
}

function Challenge3(){
	HS3title.html("Hooman...what name did you give me?");
	challenge3Button.hide();
	nameInput1 = createInput("Enter pup's given name");
	pupName2 = nameInput1.value();
	nameInput1.changed(Challenge3Check);
}

function Challenge3Check(){
	if(nameInput.value() == nameInput1.value()){
		challenge3Victory();
	}else{
		sadPup3();
	}
}

function challenge3Victory(){
	happyPupSound.play();
	HS3title.html("You are the best Hooman..I'll love you forever");
	image(heartImg, 290, 230, 50, 50);
}

function sadPup3(){
	background(0);
	nameInput1.hide();
	sadPupSound.play();
	HS3title.html("You forgot my name....do you still love me?");
	sadPup3desc = createElement("h2", "Because you forgot the pup's name, the pup became sad and depressed");
	image(doggyImg, 200, 300, 300, 300);
	image(tearsImg, 360, 425, 30, 30);
	image(tearsImg, 435, 410, 30, 30);
}

function sadPup1(){
	background(0);
	ellipseSlider.hide();
	HS1title.hide();
	challenge1Description.hide();
	sadPupSound.play();
	sadPup1text = createElement("h1", "Too much water Hooman!");
	sadPup1desc = createElement("h2", "You gave too much water to the pup, now I fear what has happened to the pup...");
	image(doggyImg, 200, 300, 300, 300);
	image(deadImg, 310, 390, 70, 70);
	image(deadImg, 390, 370, 70, 70);
}

function sadPup2(){
	background(0);
	noName.hide();
	HS3title.html("You have failed to give a name to the pup, a simple name, cmon...now the pup cries bitterly");
	nameInput.hide();
	sadPupSound.play();
	image(doggyImg, 200, 300, 300, 300);
	image(tearsImg, 360, 425, 30, 30);
	image(tearsImg, 435, 410, 30, 30);
}

function beginningSadPup(){
	careButton.hide();
	homeScreenDescription.hide();
	greeting.hide();
	thirdOption.hide();
	sadPupSound.play();
	goal.html("You have failed to take care of your pup, who knows what happened to the poor pup now");
	endTitle = createElement("h1", "Hooman make me sad..");
	image(tearsImg, 360, 425, 30, 30);
	image(tearsImg, 435, 410, 30, 30);
}

function draw(){

	if (toHomeScene1Trig == true){
		 toHomeScene1Amination();
	}else if(toHomeScene2Trig == true){
		toHomeScene2Animation();
	}
}

function toHomeScene1Amination(){
	if(ellipseSlider.value() > 58){
		HS1title.html("Too Much Water!");
		sadPup1();
	}else if(ellipseSlider.value() == 30){
		HS1title.html("Thanks!");
		toHomeScene2();
	}else{
		HS1title.html("I want water please");
	}
}

 function preload(){
  	doggyImg = loadImage('Pictures/Pup.png');
  	tearsImg = loadImage('Pictures/TT.png');
  	heartImg = loadImage('Pictures/heart.png');
  	deadImg = loadImage('Pictures/death.png');
  	happyPupSound = loadSound('Sound/happyPupSound.mp3');
  	sadPupSound = loadSound('Sound/sadPupSound.mp3');
  }

function windowResized(){
	canvas = createCanvas(windowWidth, windowHeight);
}
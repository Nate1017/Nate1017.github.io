var weatherData;
var catData;
var SayingData;
var api = "https://api.openweathermap.org/data/2.5/weather?q=";
var city = "Chicago";
var apiKey = "&units=imperial&appid=a67132050a2d3b6fb309b301adda484d";

var citySelect;
var randSay;
var randCat;
var catBG;
var sayingFontSize = 30;
var tempFontSize = 20;


function preload(){
	SayingData = loadJSON("js/birds.json");
	catData = loadJSON("js/cats.json");
	catBG = loadImage("js/image/cat0.jpg");
}

function setup(){
	createCanvas(windowWidth, windowHeight);

	citySelect = createSelect();
	citySelect.position(10,10);
	citySelect.option("Chicago");
	citySelect.option("New York");
	citySelect.option("Houston");
	citySelect.option("Manila");
	citySelect.option("Las Vegas");
	citySelect.option("Denver");
	citySelect.option("North Pole");
	citySelect.option("London");
	citySelect.option("Mexico");
	citySelect.option("Cairo");
	citySelect.option("Italy");
	citySelect.changed(changeCity);
	console.log(SayingData.Weather.length);
	console.log(catData.Cats.length);
}

function changeCity(){
	var weatherURL = api + citySelect.value() + apiKey;
	loadJSON(weatherURL, gotWeatherData);

	for(var i = 0; i < SayingData.Weather.length; i++){
		randSay = int(random(0, SayingData.Weather.length));
	}

	for (var i = 0; i < catData.Cats.length; i++){
		randCat = int(random(0, catData.Cats.length));

	}
}

function gotWeatherData(data){
	weatherData = data;
	console.log(weatherData); 
}

function draw(){
	background(160);

	if(weatherData){
		temp = weatherData.main.temp;
		wind = weatherData.wind.speed;
		catBG = loadImage(catData.Cats[randCat].path);
		
		if(temp < 0){
			background(catBG);

			textSize(sayingFontSize);
			textAlign(CENTER);
			text(SayingData.Weather[randSay].saying);

			textSize(tempFontSize);
			textAlign(LEFT);
			text("Temp: " + temp, 40, 70);

			textSize(tempFontSize);
			textAlign(LEFT);
			text("Wind: " + wind + " MPH", 20, 90);
		}
		if(temp > 0 & temp <= 10){
			background(catBG);

			textSize(sayingFontSize);
			textAlign(CENTER);
			text(SayingData.Weather[randSay].saying, windowWidth/2, windowHeight/2);

			textSize(tempFontSize);
			textAlign(LEFT);
			text("Temp: " + temp, 20, 70);

			textSize(tempFontSize);
			textAlign(LEFT);
			text("Wind: " + wind + " MPH", 20, 90);
		}
		if(temp > 10 & temp <=20){
			background(catBG);

			textSize(sayingFontSize);
			textAlign(CENTER);
			text(SayingData.Weather[randSay].saying, windowWidth/2, windowHeight/2);

			textSize(tempFontSize);
			textAlign(LEFT);
			text("Temp: " + temp, 20, 70);

			textSize(tempFontSize);
			textAlign(LEFT);
			text("Wind: " + wind + " MPH", 20, 90);
		}
		if (temp > 20 & temp <= 30){
		 	background(catBG);

		 	textSize(sayingFontSize);
		 	textAlign(CENTER);
		 	text(SayingData.Weather[randSay].saying, windowWidth/2, windowHeight/2);

		 	textSize(tempFontSize);
		 	textAlign(LEFT);
		 	text("Temp: " + temp, 20, 70);

		 	textSize(tempFontSize);
			textAlign(LEFT);
		 	text("Wind: " + wind + " MPH", 20, 90);
		}
		if(temp > 30 & temp <= 40){
		 	background(catBG);

		 	textSize(sayingFontSize);
		 	textAlign(CENTER);
		 	text(SayingData.Weather[randSay].saying, windowWidth/2, windowHeight/2);

		 	textSize(tempFontSize);
		 	textAlign(LEFT);
		 	text("Temp: " + temp, 20, 70);

		 	textSize(tempFontSize);
			textAlign(LEFT);
		 	text("Wind: " + wind + " MPH", 20, 90);
		}
		if(temp > 40 & temp <= 50){
		 	background(catBG);

		 	textSize(sayingFontSize);
		 	textAlign(CENTER);
		 	text(SayingData.Weather[randSay].saying, windowWidth/2, windowHeight/2);

		 	textSize(tempFontSize);
		 	textAlign(LEFT);
		 	text("Temp: " + temp, 20, 70);

		 	textSize(tempFontSize);
			textAlign(LEFT);
		 	text("Wind: " + wind + " MPH", 20, 90);
		}
		if(temp > 50 & temp <= 60){
		 	background(catBG);

		 	textSize(sayingFontSize);
		 	textAlign(CENTER);
		 	text(SayingData.Weather[randSay].saying, windowWidth/2, windowHeight/2);

		 	textSize(tempFontSize);
		 	textAlign(LEFT);
		 	text("Temp: " + temp, 20, 70);

		 	textSize(tempFontSize);
			textAlign(LEFT);
		 	text("Wind: " + wind + " MPH", 20, 90);
		}
		if(temp > 60 & temp <= 70){
		 	background(catBG);

		 	textSize(sayingFontSize);
		 	textAlign(CENTER);
		 	text(SayingData.Weather[randSay].saying, windowWidth/2, windowHeight/2);

		 	textSize(tempFontSize);
		 	textAlign(LEFT);
		 	text("Temp: " + temp, 20, 70);

		 	textSize(tempFontSize);
			textAlign(LEFT);
		 	text("Wind: " + wind + " MPH", 20, 90);
		}
		if(temp > 70 & temp <= 80){
		 	background(catBG);

		 	textSize(sayingFontSize);
		 	textAlign(CENTER);
		 	text(SayingData.Weather[randSay].saying, windowWidth/2, windowHeight/2);

		 	textSize(tempFontSize);
		 	textAlign(LEFT);
		 	text("Temp: " + temp, 20, 70);

		 	textSize(tempFontSize);
			textAlign(LEFT);
		 	text("Wind: " + wind + " MPH", 20, 90);
		}
		if(temp > 80 & temp <= 90){
		 	background(catBG);

		 	textSize(sayingFontSize);
		 	textAlign(CENTER);
		 	text(SayingData.Weather[randSay].saying, windowWidth/2, windowHeight/2);

		 	textSize(tempFontSize);
		 	textAlign(LEFT);
		 	text("Temp: " + temp, 20, 70);

		 	textSize(tempFontSize);
			textAlign(LEFT);
		 	text("Wind: " + wind + " MPH", 20, 90);
		}
		if(temp > 90 & temp <= 100){
		 	background(catBG);

		 	textSize(sayingFontSize);
		 	textAlign(CENTER);
		 	text(SayingData.Weather[randSay].saying, windowWidth/2, windowHeight/2);

		 	textSize(tempFontSize);
		 	textAlign(LEFT);
		 	text("Temp: " + temp, 20, 70);

		 	textSize(tempFontSize);
			textAlign(LEFT);
		 	text("Wind: " + wind + " MPH", 20, 90);
		}
		if(temp > 100){
		 	background(catBG);

		 	textSize(sayingFontSize);
		 	textAlign(CENTER);
		 	text(SayingData.Weather[randSay].saying, windowWidth/2, windowHeight/2);

		 	textSize(tempFontSize);
		 	textAlign(LEFT);
		 	text("Temp: " + temp, 20, 70);

		 	textSize(tempFontSize);
			textAlign(LEFT);
		 	text("Wind: " + wind + " MPH", 20, 90);
		}
	}
}
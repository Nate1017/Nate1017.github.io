//Variables used
var canvas;
var backgroundColor;
var userName;
var btnColor;
var paragraph;
var textInput;
var ellipseSlider;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index", "-1");
  canvas.position(0, 0);

  backgroundColor = 200;

  //create h1 element (heading)
  userName = createElement('h1', 'Nathaniel Lopez');
  userName.position(200, 10);

  //button changes color when mousePressed
  btnColor = createButton('Change Color');
  btnColor.mousePressed(changeColor);

  //mouse over paragraph changes color
  paragraph = createP('This is a paragraph');
  paragraph.mouseOver(changeColor);

  //create text input
  textInput = createInput('Type your name here');
  textInput.input(updateName);

  //userName.html(textInput.value());
  createElement('br');
  
  //create a slider element
  ellipseSlider = createSlider(0, 600, 200);
}

function draw() {
  background(backgroundColor);
  text(textInput.value(), 50, 100);
  ellipse(width/2, height/2, ellipseSlider.value(), ellipseSlider.value());
  userName.position(ellipseSlider.value(), 0);

  if(ellipseSlider.value() > 400){
    fill(0, 255, 0);
    userName.hide();
  }else{
    fill(255, 0, 0);
    userName.show();
    }
  
}

function updateFontColor(){
  paragraph.style("color", "red");
  //paragraph.style("font-size", "backgroundColor");
  //userName.style("color", "red");
}

function changeColor(){

  backgroundColor = color(random(255));
}

function updateName(){

  userName.html(textInput.value());
}

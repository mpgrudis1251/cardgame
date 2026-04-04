//creating variables for door max width and height
var maxWidth;
var maxHeight;
var theta;

function preload(){
  //preload background image
  shopext = loadImage('/Assets/Card shop exterior.jpg')
}

function setup() {
  //creat canvas that perfectly fills the screen window
  createCanvas(1440, 900);
  
  //setting maximum width and height values
  maxWidth = 20
  maxHeight = 20
  theta = 0
}

function draw() {
  //draw background image to fill the canvas
  image(shopext, 0, 0, width, height);
  
  
  //make door size fluctuate
  //https://editor.p5js.org/dansakamoto/sketches/H1ICcXXtm
let dWidth = 180 + sin(theta) * maxWidth ;
let dHeight = 150 + sin(theta) * maxHeight;

  //draw door
  fill('yellow');
  rectMode(CENTER);
  rect(width/2, height - height/3.2,dWidth, 100 + dHeight);
  
  //make theta keep getting bigger and control speed
  theta += .05; 
}
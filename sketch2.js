//variable to adjust sizes
let ratio;

//variables for bouncing cards
//https://editor.p5js.org/ellacyt/sketches/B1lmPZgoZ
let topy;
let bottomy;
let speed;
let gravity;

//variables to adjust asset sizes
var countersize;
var shelfsize;
var packsize;

function preload(){
  //preload counter, shelf, card packs, and Michael images
  counter = loadImage('Assets/Counter.png');
  
  shelf = loadImage('Assets/Shelf.png');
  
  R = loadImage('Assets/Minis/Red pack mini.png');
  O= loadImage('Assets/Minis/Orange pack mini.png');
  Y= loadImage('Assets/Minis/Yellow pack mini.png');
  G= loadImage('Assets/Minis/Green pack mini.png');
  B= loadImage('Assets/Minis/Blue pack mini.png');
  P= loadImage('Assets/Minis/Purple pack mini.png');
}

function setup() {
 //variable to adjust sizes
ratio = (windowHeight/900);

//variables for bouncing cards
//https://editor.p5js.org/ellacyt/sketches/B1lmPZgoZ
topy = 200 * ratio;
bottomy = 450 * ratio
speed=0.5;
gravity= 0.5;

//variables to adjust asset sizes
countersize = 0.125 * ratio;
shelfsize = 0.2 *ratio;
packsize = 0.125 * ratio

  //set canvas size
  createCanvas(1440 * ratio, 900 * ratio);
}

function draw() {
  //creat a white background
  background('white');
  
   frameRate(12);
   textSize(24);
  text("X: "+mouseX, 0, height/4);
  text("Y: "+mouseY, 0, height/2);
  
  // draw counter
  image(counter, 700 * ratio, 400 * ratio, 4404 * countersize * 1.25, 3573 * countersize)

// draw shelves
  image(shelf, 100 * ratio,600 * ratio, 2605 * shelfsize, 394 * shelfsize * 0.5)
  image(shelf, 100 * ratio,350 * ratio, 2605 * shelfsize, 394 * shelfsize * 0.5)
  
  //draw card packs
  image(R, 150 * ratio, topy, 706 * packsize, 901 * packsize);
  image(O, 310 * ratio, topy, 706 * packsize, 901 * packsize);
  image(Y, 460 * ratio, topy, 706 * packsize, 901 * packsize);
   image(G, 150 * ratio, bottomy, 706 * packsize, 901 * packsize);
  image(B, 310 * ratio, bottomy, 706 * packsize, 901 * packsize);
  image(P, 460 * ratio, bottomy, 706 * packsize, 901 * packsize);
  
  //set up card pack motion
  topy=topy+speed;
  bottomy=bottomy+speed;
  speed=speed+gravity;
  
  if(topy>240 * ratio){
  //reverse the speed
    speed=-0.99 *speed;
  }
}
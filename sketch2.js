//variables for bouncing cards
//https://editor.p5js.org/ellacyt/sketches/B1lmPZgoZ
let topy = 200;
let bottomy = 450
let speed=3;
let gravity= 0.2;

//variables to adjust asset sizes
var countersize = 0.125
var shelfsize = 0.2
var packsize = 0.125

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
  //set canvas size
  createCanvas(1440, 900);
}

function draw() {
  //creat a white background
  background('white');
  
   frameRate(11);
   textSize(24);
  text("X: "+mouseX, 0, height/4);
  text("Y: "+mouseY, 0, height/2);
  
  // draw counter
  image(counter, 700, 400, 4404 * countersize * 1.25, 3573 * countersize)

// draw shelves
  image(shelf, 100,600, 2605 * shelfsize, 394 * shelfsize * 0.5)
  image(shelf, 100,350, 2605 * shelfsize, 394 * shelfsize * 0.5)
  
  //draw card packs
  image(R, 150, topy, 706 * packsize, 901 * packsize);
  image(O, 310, topy, 706 * packsize, 901 * packsize);
  image(Y, 460, topy, 706 * packsize, 901 * packsize);
   image(G, 150, bottomy, 706 * packsize, 901 * packsize);
  image(B, 310, bottomy, 706 * packsize, 901 * packsize);
  image(P, 460, bottomy, 706 * packsize, 901 * packsize);
  
  //set up card pack motion
  topy=topy+speed;
  bottomy=bottomy+speed;
  speed=speed+gravity;
  
  if(topy>240){
  //reverse the speed
    speed=-0.99 *speed;
  }
}
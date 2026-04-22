//variable to adjust sizes
let ratio;

// Create an array and an index variable for the number of clicks
var clicks = [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13];
var clickindex = 0;
var currentclick = 1;
var clickcheck = false;

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

//set variables for if packs have been selected
//var red = true;

//create strings of dialogue
let intro1 ="Hey, what's up dude?";

let intro2 = "Welcome to Mr. Michael's Card Shop!";

let intro3 = "We've got tons of cards here made by yours truly.";

let intro4 = "Go ahead and check some of them out. There may even be some you recognize.";

let currentCharacter = 0;

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

  //preload gloria hallelujah font
  GH = loadFont('Assets/GloriaHallelujah-Regular.ttf');
}

function setup() {
 //variable to adjust sizes
ratio = (windowHeight/900);
//ratio = 1

//retrieve pack status when sketch starts
//let redOpen = getItem('redPack');

//save pack status to pack variable
//if(redOpen !== null){
  //red = redOpen;
//}

//variables for bouncing cards
//https://editor.p5js.org/ellacyt/sketches/B1lmPZgoZ
topy = 220 * ratio;
bottomy = 470 * ratio
speed= 0.5;
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
  
  textFont(GH);
   frameRate(24);
   textSize(30 * ratio);
  //text("X: "+mouseX, 0, height/4);
  //text("Y: "+mouseY, 0, height/2);
  
  // draw counter
  image(counter, 700 * ratio, 400 * ratio, 4404 * countersize * 1.25, 3573 * countersize)

// draw shelves
  image(shelf, 100 * ratio,600 * ratio, 2605 * shelfsize, 394 * shelfsize * 0.5)
  image(shelf, 100 * ratio,350 * ratio, 2605 * shelfsize, 394 * shelfsize * 0.5)
  
  //draw card packs if they have not been opened prior

  //if (redOpen = true){
  image(R, 150 * ratio, topy, 706 * packsize, 901 * packsize);
  //}
  image(O, 310 * ratio, topy, 706 * packsize, 901 * packsize);
  image(Y, 460 * ratio, topy, 706 * packsize, 901 * packsize);
   image(G, 150 * ratio, bottomy, 706 * packsize, 901 * packsize);
  image(B, 310 * ratio, bottomy, 706 * packsize, 901 * packsize);
  image(P, 460 * ratio, bottomy, 706 * packsize, 901 * packsize);
  
  //set up card pack motion
  topy=topy + ratio * 5 * sin(speed);
  bottomy=bottomy + 5 * sin(speed) * ratio;
  speed=speed+gravity;

  //go through dialogue based on clicks
  if (currentclick == 1){
     // The substring() method will return all the characters of a string between the starting and ending positions (starts at 0)
  let currentIntro = intro1.substring(0, currentCharacter);
  text(currentIntro, width/2, height/2, 300 * ratio,300 *ratio);

  // Increase the current character so that we get a longer and longer substring above. Using fractional numbers allows us to slow down the pace.
  currentCharacter += 0.5;

  if (currentCharacter == 17){
    currentCharacter =17;
//make the variable true only once the text has all appeared
clickcheck = true;
  }
  }

if (currentclick == 2){
     // The substring() method will return all the characters of a string between the starting and ending positions (starts at 0)
  currentIntro = intro2.substring(0, currentCharacter);
  text(currentIntro, width/2, height/2, 300 * ratio, 300 * ratio);


  // Increase the current character so that we get a longer and longer substring above. Using fractional numbers allows us to slow down the pace.
  currentCharacter += 0.5;

  if (currentCharacter == 30){
//make the variable true only once the text has all appeared
currentCharacter = 30;
clickcheck = true;
  }
  }

  if (currentclick == 3){
     // The substring() method will return all the characters of a string between the starting and ending positions (starts at 0)
  currentIntro = intro3.substring(0, currentCharacter);
  text(currentIntro, width/2, height/2, 300 * ratio, 500 * ratio);

  // Increase the current character so that we get a longer and longer substring above. Using fractional numbers allows us to slow down the pace.
  currentCharacter += 0.5;

  if (currentCharacter == 40){
//make the variable true only once the text has all appeared
currentCharacter = 40;
clickcheck = true;
  }
  }

    if (currentclick == 4){
     // The substring() method will return all the characters of a string between the starting and ending positions (starts at 0)
  currentIntro = intro4.substring(0, currentCharacter);
  text(currentIntro, width/2, height/2, 300 * ratio, 500 * ratio);


  // Increase the current character so that we get a longer and longer substring above. Using fractional numbers allows us to slow down the pace.
  currentCharacter += 0.5;

  if (currentCharacter == 60){
//make the variable true only once the text has all appeared
currentCharacter = 60;
clickcheck = true;
  }
  }
  //if mouse is clicked, run function click
  //https://editor.p5js.org/carriehott/sketches/2WOdFyIaR
  if(mouseIsPressed){
      click ();
  }
}

function click(){
  //calculates the distance between cursor and center of each pack
  let rbutton = dist(mouseX, mouseY, ratio * 210, ratio * 280);
  let obutton = dist(mouseX, mouseY, ratio * 360, ratio * 280);
  let ybutton = dist(mouseX, mouseY, ratio * 510, ratio * 280);
  let gbutton = dist(mouseX, mouseY, ratio * 210, ratio * 530);
  let bbutton = dist(mouseX, mouseY, ratio * 360, ratio * 530);
  let pbutton = dist(mouseX, mouseY, ratio * 510, ratio * 530);
  //if the distance is less than or equal to 70, go to the coorisponding pack page
  if (pbutton <=70 * ratio && currentclick >= 6){
    window.location.href = "purple.html";
  }

  if (bbutton <=70 * ratio && currentclick >= 6){
    window.location.href = "blue.html";
  }

  if (gbutton <=70 * ratio && currentclick >= 6){
    window.location.href = "green.html";
  }

  if (ybutton <=70 * ratio && currentclick >= 6){
    window.location.href = "yellow.html";
  }

  if (obutton <=70 * ratio && currentclick >= 6){
    window.location.href = "orange.html";
  }

  if (rbutton <=70 * ratio && currentclick >= 6){
//set pack value as true so it does not appear on screen
//red = false;

//store the status of the packk
  //  storeItem('redPack', red);
    window.location.href = "red.html";
  }

  currentclick = clicks[clickindex];
  if (clickcheck === true){
  clickindex++;
  clickcheck = false;
  currentCharacter = 0;
}
}
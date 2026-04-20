var calvin;

// Create an array and an index variable for the cards that are selected
//var cards = [1, 2, 3, 4, 5,6,7,8,9,10,11,12];
var cards = [];
var cardindex = 0;
var currentcard;

// Create an array and an index variable for the number of clicks
var clicks = [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13];
var clickindex = 0;
var currentclick;

function preload(){
  //load in pack image
  pack = loadImage('Assets/Regular/Orange pack.png');
  
  //load in image for back of card
  back = loadImage('Assets/card back.png')
  
  //load in card faces
  cards[0] = loadImage('Assets/faces/calvin.png');
  cards[1] = loadImage('Assets/faces/clay.png');
  cards[2] = loadImage('Assets/faces/demon.png');
  cards[3] = loadImage('Assets/faces/elflin.png');
  cards[4] = loadImage('Assets/faces/freddy.png');
  cards[5] = loadImage('Assets/faces/kelly.png');
  cards[6] = loadImage('Assets/faces/kitty.png');
  cards[7] = loadImage('Assets/faces/lisa.png');
  cards[8] = loadImage('Assets/faces/spider.png');
  cards[9] = loadImage('Assets/faces/stitch.png');
  cards[10] = loadImage('Assets/faces/turtle.png');
  cards[11] = loadImage('Assets/faces/tv.png');
  
  
}

function setup() {
  //variable to adjust sizes
  ratio = windowHeight/900;
  
  //creat canvas size
  createCanvas(1440 * ratio, 900 * ratio);
  
  //variable for card face movement
 face1y = height * 3;
 face2y = height * 3;
 face3y = height * 3;
 face4y = height * 3;
 face5y = height * 3;
  
  //variable for pack opening movement
 packy = height/2;
  
  //variables for card back movement
 back1y = height/2;
 back2y = height/2;
 back3y = height/2;
 back4y = height/2;
 back5y = height/2;
  
  //speed variable
  speed = 100;
  
  //shuffle the values in cards
  shuffle(cards,true);
  
  //make current card equal a value in the cards array
  currentcard = cards[cardindex];
  print(currentcard);
  
  
  //make it so images center align
  imageMode(CENTER);
  
  print(cards);
 
}

function draw() {
  //variable to adjust card sizes
 var cardsize = 0.5;
 var packsize = 0.15;
 
 //variable for card face movement
//var face1y = height * 3;
//var face2y = height * 3;
  //var face3y = height * 3;
//var face4y = height * 3;
  //var face5y = height * 3;
  
  background('white');
  
  //draw backs of cards
  image(back, width/2, back5y, 1438 * ratio * cardsize, 1438 * ratio * cardsize);
  image(back, width/2, back4y, 1438 * ratio * cardsize, 1438 * ratio * cardsize);
  image(back, width/2, back3y, 1438 * ratio * cardsize, 1438 * ratio * cardsize);
  image(back, width/2, back2y, 1438 * ratio * cardsize, 1438 * ratio * cardsize);
  image(back, width/2, back1y, 1438 * ratio * cardsize, 1438 * ratio * cardsize);
  
  //draw pack
  image(pack, width/2, packy, 4500 * packsize * ratio, 6000 * packsize * ratio)
  
  //draw all five cards off screen
 image(cards[cardindex], width/2, face1y, 1438 * ratio * cardsize, 1438 * ratio * cardsize);
  image(cards[cardindex], width/2, face2y, 1438 * ratio * cardsize, 1438 * ratio * cardsize);
  image(cards[cardindex], width/2, face3y, 1438 * ratio * cardsize, 1438 * ratio * cardsize);
  image(cards[cardindex], width/2, face4y, 1438 * ratio * cardsize, 1438 * ratio * cardsize);
  image(cards[cardindex], width/2, face5y, 1438 * ratio * cardsize, 1438 * ratio * cardsize);
  
  //open pack on first click
  if (currentclick == 1){
    packy = packy + (speed * ratio);

    //set variable to false wen it reaches a point
    if (packy => height * 6){
    clickcheck = false;
    }
  }
  
  //make the first face card go up
  if (currentclick == 2){
    //move back of card down
     back1y = back1y + (speed * ratio);
    
    if (face1y > height/2){
    face1y = face1y - (speed * ratio);
    }
    //make card stop when it reaches and set variable to false
    if (face1y <= height/2){
     face1y = height/2;
     clickcheck = false;
    }
  }
  
  if (currentclick == 3){
//card goes up off screen
    face1y = face1y - (speed * ratio);

    //set variable to false wen it reaches a point
    if (face1y <= (height - height * 6)){
  clickcheck = false;
    }
  }
  
  if (currentclick == 4){
    //reset card index
    cardindex = 1;
    
    //move back of card down
     back2y = back2y + (speed * ratio);
    
    if (face2y > height/2){
    face2y = face2y - (speed * ratio);
    }
    //make card stop when it reaches and set variable to false
    if (face2y <= height/2){
     face2y = height/2;
     clickcheck = false;
    }
  }
  
  if (currentclick == 5){
//card goes up off screen
    face2y = face2y - (speed * ratio);

    //set variable to false wen it reaches a point
    if (face2y <= (height - height * 6)){
  clickcheck = false;
    }
  }
  
  if (currentclick == 6){
    //reset card index
    cardindex = 2;
    
    //move back of card down
     back3y = back3y + (speed * ratio);
    
    if (face3y > height/2){
    face3y = face3y - (speed * ratio);
    }
    //make card stop when it reaches
    if (face3y <= height/2){
     face3y = height/2;
     clickcheck = false;
    }
  }
  
  if (currentclick == 7){
//card goes up off screen
    face3y = face3y - (speed * ratio);

    //set variable to false wen it reaches a point
    if (face3y <= (height - height * 6)){
  clickcheck = false;
    }
  }
  
  if (currentclick == 8){
    //reset card index
    cardindex = 3;
    
    //move back of card down
     back4y = back4y + (speed * ratio);
    
    if (face4y > height/2){
    face4y = face4y - (speed * ratio);
    }
    //make card stop when it reaches
    if (face4y <= height/2){
     face4y = height/2;
     clickcheck = false;
    }
  }
  
  if (currentclick == 9){
//card goes up off screen
    face4y = face4y - (speed * ratio);

    //set variable to false wen it reaches a point
    if (face4y <= (height - height * 6)){
  clickcheck = false;
    }
  }
  
  if (currentclick == 10){
    //reset card index
    cardindex = 4;
    
    //move back of card down
     back5y = back5y + (speed * ratio);
    
    if (face5y > height/2){
    face5y = face5y - (speed * ratio);
    }
    //make card stop when it reaches
    if (face5y <= height/2){
     face5y = height/2;
     clickcheck = false;
    }
  }
  
  if (currentclick == 11){
//card goes up off screen
    face5y = face5y - (speed * ratio);

    //set variable to false wen it reaches a point
    if (face2y <= (height - height * 6)){
  clickcheck = false;
    }
  }

  if (currentclick == 12){
    //reset card index
cardindex = 0

// display all cards drawn from the pack
   image(cards[cardindex], width/2 - (1438 * ratio * cardsize/2), height/4, 1438 * ratio * cardsize/2, 1438 * ratio * cardsize/2);
   image(cards[cardindex + 1], width/2, height/4, 1438 * ratio * cardsize/2, 1438 * ratio * cardsize/2);
   image(cards[cardindex + 2], width/2 + (1438 * ratio * cardsize/2), height/4, 1438 * ratio * cardsize/2, 1438 * ratio * cardsize/2);
   image(cards[cardindex + 3], width/2 - (1438 * ratio * cardsize/4), height - height/4, 1438 * ratio * cardsize/2, 1438 * ratio * cardsize/2);
   image(cards[cardindex + 4], width/2 + (1438 * ratio * cardsize/4), height - height/4, 1438 * ratio * cardsize/2, 1438 * ratio * cardsize/2);
  }

  if (currentclick == 13){
    //return back to the interior page
     window.location.href = "interior1.html";
  }
  
  print(currentclick);
}

function mousePressed() {
  // Loop through sequence if at last element
 // if (cardindex > 4) {
   // cardindex = 0;
 // }
  
  //sets the current click based on index and increases index
  currentclick = clicks[clickindex];
  if (clickcheck == false){
  clickindex++;
  clickcheck = true
}
  //currentclick = 1
}
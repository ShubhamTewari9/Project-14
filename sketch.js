var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, blue_balloonImage, backgroundImage;
var score = 0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
    var select_balloon = Math.round(random(1,3));

    if (World.frameCount % 100 == 0) {
      if (select_balloon == 1) {
        redBalloon()
      } else if (select_balloon == 2) {
        blueBalloon()
      } else {
        greenBalloon()
      }
    }
  
   
    /*if (redBalloon.isTouching(arrow)) {
      redBalloon.destroy;
    }
    
    if (blueBalloon.isTouching(arrow)) {
      blueBalloon.destroy;
    }

    if (greenBalloon.isTouching(arrow)) {
      greenBalloon.destroy;
    }*/
    
    

  drawSprites();
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -10;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var red = createSprite(20,400, 10, 10);
  red.addImage(red_balloonImage);
  red.velocityY = -3;
  red.lifetime = 125;
  red.scale = 0.1;
 // if (red.isTouching(arrow)) {
 //   red.destroy;
 // }

}

function blueBalloon() {
  var blue = createSprite(20,400, 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityY = -3;
  blue.lifetime = 125;
  blue.scale = 0.1;
 // if (blue.isTouching(arrow)) {
  //  blue.destroy;
 // }
}

function greenBalloon() {
  var green = createSprite(20,400, 10, 10);
  green.addImage(green_balloonImage);
  green.velocityY = -3;
  green.lifetime = 125;
  green.scale = 0.1;
 // if (green.isTouching(arrow)) {
  //  green.destroy;
 // }
}

  

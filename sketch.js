var building1, building2;
var road1, road1Image, road2, road2Image;
var backgroundImage;
var policeStation, policeStationImage, policeCar, policeCarImage;
var criminal, criminalImage;
var PLAY=1, END=0;
var gamestate = PLAY;


function preload(){
  road2Image = loadImage("Road.png");

  building1Image = loadImage("building1.png");
  building2Image = loadImage("building2.png");

  policeCarImage = loadImage("policeCarImage.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  //createSprite(400, 200, 50, 50);

  policeStation = createSprite(1300, 200, 100, 300);

  road2 = createSprite(0, 700, displayWidth+4000, 700);
  road2.addImage(road2Image);

  border1 = createSprite(0, 170, displayWidth, 20);
  border1.shapeColor = "red";

  policeCar = createSprite(1500, 400, 60, 60);
  policeCar.scale=0.8;
  policeCar.shapeColor = "blue";
  policeCar.addImage(policeCarImage);
  policeCar.velocityX = -4;

  criminal = createSprite(1000, 500, 60, 60);
  criminal.scale=0.6
  criminal.shapeColor = "red";
}

function draw() {
  background("yellow");  
  drawSprites();
if(gamestate === PLAY){


  if (keyDown(RIGHT_ARROW)) {
    criminal.velocityX = 4;
    criminal.velocityY = 0;
    
  }
  if (keyDown(LEFT_ARROW)) {
    criminal.velocityX = -4;
    criminal.velocityY = 0;
    
  }
  if (keyDown(UP_ARROW)) {
    criminal.velocityX = 0;
    criminal.velocityY = -4;
    
  }
  if (keyDown(DOWN_ARROW)) {
    criminal.velocityX = 0;
    criminal.velocityY = 4;
    
  }

road2.velocityX = 10

  if(road2.x<0){
    road2.x = road2.displayWidth/2
  }
  building();

  if(policeCar.isTouching(criminal)){
gamestate = END
  }
}
else if(gamestate === END){
  console.log("gameEnd")
}

if(criminal.isTouching(policeCar)){
  stroke(0);
  fill(yellow);
  textSize(50);
  text("You Lose", 800, 500);
}
}
function building(){
  if(frameCount%240 === 0){
    building1 = createSprite(displayWidth, 100, 30, 150)
    building1.velocityX = -4;
    building1.scale = 0.7
    var randomImage = Math.round(random(1,2))
    switch(randomImage){
      case 1:building1.addImage(building1Image);
      break
      case 2:building1.addImage(building2Image);
      building1.scale = 0.6
      building1.width = 50;
      building1.height = 100
      break
      default:break
    }
  }
}
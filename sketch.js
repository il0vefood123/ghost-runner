var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  doorsGroup=createGroup()
  invisibleBlockGroup=createGroup()
  climbersGroup=createGroup()
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost=createSprite(300,300);
  ghost.addImage("ghost",ghostImg);
  ghost.scale=0.45
}

function draw() {
  background(200);
  
  if(keyDown("space")){
    ghost.velocityY=-10
  }
  ghost.velocityY=ghost.velocityY+1
  if(tower.y > 400){
      tower.y = 300
    }
    ghost.collide(climbersGroup);
    
    spawnDoors();
    drawSprites();
   if(keyDown("left")){
    ghost.x=ghost.x-3
   }
   if(keyDown("right")){
    ghost.x=ghost.x+3
   }
   if(ghost.y>600||ghost.isTouching(invisibleBlockGroup)){
    text("gameover",200,200)
    
   }



}


function spawnDoors(){
if(frameCount%200==0){
  door =createSprite(250,-20);
  door.x=random(50,550);
  door.addImage("door",doorImg);
  door.velocityY=2
  climber=createSprite(door.x,door.y+50)
  climber.addImage(climberImg)
  climber.velocityY=2
  doorsGroup.add(door)
  climbersGroup.add(climber)
  ghost.depth=door.depth+1
  invisibleBlock=createSprite(climber.x,climber.y+30,climber.width,3);
  invisibleBlock.velocityY=2
  invisibleBlockGroup.add(invisibleBlock);
  invisibleBlock.visible=false
}

}

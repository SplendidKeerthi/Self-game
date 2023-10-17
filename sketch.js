var wizard, wizardWalking 
var goblin
var ground
var orb
var mountain
var score
var life

function preload(){
  goblinImage = loadImage("Goblin.png")
  groundImage = loadImage("Ground.jpeg")
  orbImage = loadImage("Orb.png")
  mountainImage = loadImage("Rocky_mountain.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  ground = createSprite(width/2,height/2,width,2);
  ground.addImage("ground", groundImage)
  ground.x = width/2
  ground.velocityX = -5
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(ground.x < 10){
    ground.x = ground.width
  }
}
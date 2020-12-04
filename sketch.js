var monkey , monkey_running;
var banana ,bananaImage,stone,stoneImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas (600,600);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  score = 0;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
}

function draw() {
  background("white");
  
   ground=createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x =ground.width/2;
  console.log(ground.x);
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }

  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  Food();
  obstacle();
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("balck");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("survival Time: "+ survivalTime,100,50);

}

function Food(){
  if(World.frameCount%80===0){
    banana = createSprite(550,120,20,20);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.setLifetime  = 100;
    
   banana.y=Math.round(random(120,200));
    
    FoodGroup.add(banana);
    
  }
  
}

function obstacle(){
   if(World.frameCount%300===0){
     stone = createSprite(450,330,20,20);
     stone.addImage(stoneImage); 
     stone.scale = 0.1;
     stone.velocityX = -4;
     stone.setLifetime = 350;
     
     obstacleGroup.add(stone);
     
   }
}





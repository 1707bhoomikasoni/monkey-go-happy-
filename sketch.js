var monkey , monkey_running,gameState=PLAY
var PLAY=1,END=0
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,ground,bg,bgImage,score=0

function preload(){
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
bgImage=loadImage("jungle.jpg")
}

function setup() {
  createCanvas(500,600)
  bg=createSprite(300,200)
  bg.addImage("moving",bgImage)
  bg.scale=0.6
  bg.velocityX=-3
  monkey=createSprite(100,280)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.10
   ground=createSprite(300,355,600,5)
  ground.visible=false
  foodGroup=createGroup()
  obstacleGroup=createGroup()
}     

function draw() {
background("white")
var rocks
if(keyDown("space")&& monkey.y >= 110) {
  monkey.velocityY = -10;
}
 monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground) 
 bananas()
  stones()
  if (bg.x < 250){
      bg.x = ground.width/2;
    }
if(monkey.isTouching(foodGroup)){
    foodGroup.destroyEach()
    monkey.scale=0.15
    score=score+1
}

if(gameState===END) {
  monkey.velocityX=0
  bg.velocityX=0
   monkey.visible=false

   foodGroup.destroyEach()
   obstacleGroup.destroyEach()
}

drawSprites() 
push()
textSize(24)
fill("white")
stroke("white")
strokeWeight(0.5)
  text("score : "+ score, 360,80);
  pop()
  textSize(18)
  fill("white")
  stroke("white")
  strokeWeight(0.2)
  text("Hi I am monkey !! Help me to reach till bananas",45,395)
  text("Press SPACE key on your keyboard to feed me",45,420)
  
  if(monkey.isTouching(obstacleGroup)){
    push()
    gameState=END;
    pop()
    fill("white")
    textSize(40)
    stroke("white")
    text("GAME OVER !!",80,300)
  }
 }

function bananas(){
if(frameCount%70===10)  {
var fruit=createSprite(600,0)  
fruit.y=Math.round(random(120,200))  
  fruit.velocityX=-7
  fruit.addImage(bananaImage)
  foodGroup.add(fruit)
  fruit.scale=0.1
fruit.lifetime=100
fruit.setCollider("circle",0,0,30)
}}

function stones(){
 if(frameCount%100===0) {
var rocks=createSprite(600,315)  
 rocks.velocityX=-6;
 rocks.setCollider("circle",0,0,100)
  obstacleGroup.add(rocks)
 rocks.scale=0.5
 rocks.lifetime=100
 rocks.addImage(obstacleImage)
   rocks.scale=0.2
 }
 switch(score){
  case 5:monkey.scale=0.18
  break;
  case 10:monkey.scale=0.21
    break
    case 15:monkey.scale=0.24
    break
    case 20:monkey.scale=0.27
  break
  default:break
}}
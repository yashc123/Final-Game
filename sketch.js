var robber;
var securityGuard;
var gameState = "play";
var robberRunning, securityGuardImage;
var score = 0;
var gameOver, restart;
var bg;
var bgImg;
var sg;
var robberStanding;

function preload(){
  robberRunning = loadAnimation("Images/RealRobber1.png","Images/RealRobber2.png","Images/RealRobber3.png","Images/RealRobber4.png");
  securityGuardImage = loadImage("Images/SecurityGuard.png");
  bgImg = loadImage("Images/Background.png");
  robberStanding = loadImage("Images/RealRobber1.png");
}

function setup() {
  createCanvas(800,1200);

  bg  = createSprite(400,600,800,1000);
  bg.addImage(bgImg);

  robber = createSprite(400,800,40,40);
  robber.addAnimation("running",robberRunning);
  robber.scale = 1.5;

  sg = new Group()
}

function draw() {

  drawSprites();

  stroke("white");
  fill("white");
  textSize(20);
  text("Score : " + score,600,50);

  if(gameState=== "play") {
    bg.velocityY = 5;

    if(bg.y>600) {
    bg.y = 0;
    }

    score = score + 1;

    spawnGuards();

    if(sg.isTouching(robber)){
      gameState = "end";
      }
  }
else if(gameState=="end"){
  bg.velocityY = 0;
  robber.addImage(robberStanding);
  stroke("white");
  fill("white");
  text("Game Over!",600,50);
}
  

  
}

function spawnGuards() {
  if(frameCount % 100 === 0) {
    rand = Math.round(random (100,600))
  securityGuard = createSprite(250,-10,40,40);
  securityGuard.addImage(securityGuardImage);
  securityGuard.scale = 0.4;
  securityGuard.velocityY = 5;
  securityGuard.x = rand;
  sg.add(securityGuard);
  }
}









var player;
var paddel1,paddel2,paddel3,paddel4,paddel5,paddel6;
var sky;
var life =3;
var score  =0;
var coinGroup;
var plank;
var pikachu;
var paddelImage,skyImage,playerImage,coinImage,plankImage,pikachuImage,gameOverImage;
var music;
var gameOver;
var edges;
var restart;

function preload(){
playerImageRight =loadAnimation("frame0R.gif","frame1R.gif","frame2R.gif","frame3R.gif")
playerImageLeft =loadAnimation("frame_0L.gif","frame_1L.gif","frame_2L.gif","frame_3L.gif","frame_4L.gif","frame_5L.gif","frame_6L.gif","frame_7L.gif")
playerImageUP =loadAnimation("frame_0gp.gif","frame_1gp.gif","frame_2gp.gif","frame_3gp.gif","frame_4gp.gif","frame_5gp.gif")
coinImage =loadImage("coin.png")
plankImage =loadImage("plank.jpg")
//pikachuImage =loadImage("pickachu.jpeg")
music =loadSound("ElevatorMusic.mp3")
skyImage =loadImage("background.jpg")
gameOverImage =loadImage("game over.jpg")

}

function setup(){
  createCanvas(windowWidth,windowHeight)
   sky = createSprite(windowWidth/2,windowHeight/2,400,400);
  //sky.y =sky.width/2;
  //sky.x =sky.height/2;
  sky.scale=2.5;
  sky.addImage(skyImage);
  edges =createEdgeSprites();
  
   paddel1 = createSprite(200,300,30,5);
  //paddel1.addAnimation("plank",plankImage);
  //paddel1.scale=0.3
  paddel1.velocityX = 2;
  
   paddel2 = createSprite(297,262,30,5);
   //paddel2.addAnimation("plank",plankImage);
  //paddel2.scale=0.3
  paddel2.velocityX = -2;

   paddel3 = createSprite(193,211,30,5);
  // paddel3.addAnimation("plank",plankImage);
   //paddel3.scale=0.3
  paddel3.velocityX = 2;
  
   paddel4 = createSprite(278,137,30,5);
 // paddel4.setAnimation("paddel");
  paddel4.velocityX = -2;
  
   paddel5 = createSprite(262,92,30,5);
 // paddel5.setAnimation("paddel");
  paddel5.velocityX = 2;
  
   paddel6 = createSprite(193,52,30,5);
  //paddel6.setAnimation("paddel");
  paddel6.velocityX = -2;
  

  




  
   player = createSprite (windowWidth/2,windowHeight/2+200,15,30);
  player.addAnimation("playerup",playerImageUP);
  player.addAnimation("playerR",playerImageRight);
  player.addAnimation("playerL",playerImageLeft);
  player.scale=0.2;
  // var ground = createSprite(200,380,400,5);
  player.debug = true;
  
  
  //player.debug = true;
  // paddel1.debug = true;
  paddel1.setCollider("rectangle",0,0,30,5);
  paddel2.setCollider("rectangle",0,0,30,5);
  paddel3.setCollider("rectangle",0,0,30,5);
  paddel4.setCollider("rectangle",0,0,30,5);
  paddel5.setCollider("rectangle",0,0,30,5);
  paddel6.setCollider("rectangle",0,0,30,5);
  player.setCollider("rectangle",0,0,30,30);



  coinGroup = new Group()
  //music.play();

}




function draw() {
background("pink");

var edges=createEdgeSprites();
paddel1.bounceOff(edges);
paddel2.bounceOff(edges);
paddel3.bounceOff(edges);
paddel4.bounceOff(edges);
paddel5.bounceOff(edges);
paddel6.bounceOff(edges);
//player.collide(edges[3]);

if((keyDown("UP_ARROW"))){
player.y = player.y-5;
player.changeAnimation("playerup",playerImageUP);
player.scale=0.2;
}
if(keyDown("RIGHT_ARROW")){
player.x = player.x+5;
player.changeAnimation("playerR",playerImageRight);
player.scale=0.2;
}
if(keyDown("LEFT_ARROW")){
player.x = player.x-5;
player.changeAnimation("playerL",playerImageLeft);
player.scale=0.2;
}
if(keyDown("DOWN_ARROW")){
  player.y = player.y+5;
  player.changeAnimation("playerup",playerImageUP);
  player.scale=0.2;
  }
  stroke(100,150,200)
  strokeWeight(2)
text("lives"+life,windowWidth/2+100,50)
text("score"+score,windowWidth/2+200,50)

 
if(player.isTouching(paddel1)||player.isTouching(paddel2)||player.isTouching(paddel3)||player.isTouching(paddel4)||player.isTouching(paddel5)||player.isTouching(paddel6)||player.isTouching(edges[0])||player.isTouching(edges[1])||player.isTouching(edges[2])||player.isTouching(edges[3])){
  
life=life-1;
//player.x = windowWidth/2
//player.y = windowHeight/2+300
  if(life<3&&life>0){
    player.x=windowWidth/2;
    player.y=windowHeight/2+200
  }else{
    //displayGameOverSprite
    //player.changeAnimation("over",gameOverImage);
    gameOver = createSprite(windowWidth/2,windowHeight/2,50,50)
    gameOver.addImage("game",gameOverImage)
    restart = createSprite(windowWidth/2,windowHeight/2+100,50,50)
  }
}
if(mousePressedOver(restart)){
life=3;
score=0;
player.x=windowWidth/2;
player.y=windowHeight/2+200
gameOver.destroy();
restart.destroy();
}





// creating coins
coins();


// player.velocityY = player.velocityY+0.2;
// player.collide(ground);
//player.collide(paddel1);
//player.collide(paddel2);
//player.collide(paddel3);
//player.collide(paddel4);
//player.collide(paddel5);
//player.collide(paddel6);
if(player.isTouching(coinGroup)){
  coinGroup.destroyEach()
  score=score+1
  }

drawSprites();

}

function coins( ){
var randomX = random(5,windowWidth-5);
var randomY = random(5,windowHeight-5);


if(World.frameCount%160===0){
var coins = createSprite(randomX,randomY,10,10);
coins.lifetime= 100;
coins.addImage(coinImage);
coins.scale = 0.1 ;
coinGroup.add(coins)

}



}
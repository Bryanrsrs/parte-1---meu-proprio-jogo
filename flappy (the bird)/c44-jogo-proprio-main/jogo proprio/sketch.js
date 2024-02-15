const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var cano,cano2,bird,backgroundImg,coin,gameOver
var canoImg,cano2Img,birdImg,coinImg,gameOverImg
function preload()
{
    canoImg = loadImage("./assets/cano.png");
    cano2Img = loadImage("./assets/cano-baixo.png");
    birdImg = loadImage("./assets/flappy.png");
    coinImg = loadImage("./assets/moeda.png");
    gameOverImg = loadImage("./assets/gameOver.png");
    backgroundImg = loadImage("./assets/background.jpg");
}

function setup() {
  createCanvas(1500, 700);
  engine = Engine.create();
  world = engine.world;
  
}

function draw() {
  background(0);
  image(backgroundImg, 0, 0, 1500, 700);

  drawSprites();
  Engine.update(engine);
}
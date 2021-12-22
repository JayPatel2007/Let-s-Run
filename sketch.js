
function preload(){
  //pre-load images
  pathImage=loadImage("path.png")
  powerImage=loadImage("power.png")
  Runner1Image=loadImage("Runner-1.png")
  Runner2Image=loadImage("Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImage);
  path.velocity=4;
  path.scale=1.2;
}

function draw() {
  background(0);
if(path.y>400){
  path.y=height/2;
}
}

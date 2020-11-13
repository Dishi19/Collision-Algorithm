var movingrectangle, fixedrectangle

function setup() {
  createCanvas(800,400);
  movingrectangle = createSprite(400, 200, 50, 100);
  movingrectangle.shapeColor = "green"
  movingrectangle.debug = true

  fixedrectangle = createSprite(200, 200, 50, 50);
  fixedrectangle.shapeColor = "green"
  fixedrectangle.debug = true
}


function draw() {
  background(0);
  
  movingrectangle.x = World.mouseX;
  movingrectangle.y = World.mouseY;

  if(movingrectangle.x - fixedrectangle.x < fixedrectangle.width/2 + movingrectangle.width/2 &&
     fixedrectangle.x - movingrectangle.x < fixedrectangle.width/2 + movingrectangle.width/2 &&
     movingrectangle.y - fixedrectangle.y < fixedrectangle.height/2 + movingrectangle.height/2 &&
     fixedrectangle.y - movingrectangle.y < fixedrectangle.height/2 + movingrectangle.height/2 )
  {
    movingrectangle.shapeColor = "red"
    fixedrectangle.shapeColor = "red"
  }
  else{
    movingrectangle.shapeColor = "green"
    fixedrectangle.shapeColor = "green"
  }
  drawSprites();
}
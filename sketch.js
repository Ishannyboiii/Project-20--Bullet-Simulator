var bullet, wall, thickness;
var speed, weight;


function setup() {
  createCanvas(1600,400);

  speed=(random(223,321));
  weight=(random(30,52)); 

  bullet=createSprite(50,200,20,20);
  bullet.velocityX=speed;
  
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  thickness=random(22,83);
  debug=true; 
  

}

function draw() {

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.collide(wall);
    bullet.velocityX=0;
  var damage=0.5*bulletWeight*bulletSpeed*bulletSpeed/wallThickness*wallThickness*wallThickness;

  if(damage>10)
  {
    bullet.shapeColor=color(255,0,0);
  }

if(damage<10)
{
car.shapeColor=color(230,230,0)
}
  }

  background(255,255,255);  
  drawSprites();
}
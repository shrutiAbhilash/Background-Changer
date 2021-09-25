
function setup() {
  createCanvas(400,400);
  Box=createSprite (120,69,13,5);
background("white")};

function draw() 
{
  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
   background("blue");
    
  }
  
  if (keyIsDown(DOWN_ARROW))
  {
    background("orange");
  } 

  if (keyIsDown(UP_ARROW))
{
  background("pink");
}

drawSprites();

}





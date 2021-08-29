var fixedRect, movingRect;
var obj1, obj2;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj1=createSprite(100, 200);
  obj2=createSprite(300, 200);
  obj1.shapeColor="green"
  obj2.shapeColor="green"

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  //Function call
  //Arguments to the function
  if(isTouching(obj2, movingRect)){
    movingRect.shapeColor="red";
    obj2.shapeColor="red"
  }else{
    movingRect.shapeColor="green";
    obj2.shapeColor="green"
  }
  
  drawSprites();
}


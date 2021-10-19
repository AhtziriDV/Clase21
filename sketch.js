var uno, dos;
var tres, cuatro;

function setup() {
  createCanvas(800,400);
  uno = createSprite(400, 200, 50, 50);
  uno.shapeColor = "green";
  dos = createSprite(200, 100, 50, 50);
  dos.shapeColor = "green";
  tres = createSprite (350,50,50,50)
  tres.shapeColor = "blue"
  tres.velocityY = +2
  cuatro = createSprite (350,350,50,50)
  cuatro.shapeColor = "green"
  cuatro.velocityY = -2
}

function draw() {
  background(255,255,255);  

  dos.x = World.mouseX;
  dos.y = World.mouseY;

  uno.debug = true;
  dos.debug = true;
  tres.debug = true;
  cuatro.debug = true;

  if(isTouching(dos, cuatro) === true){
    dos.shapeColor = "yellow";
    cuatro.shapeColor = "yellow";
  }
  else{
    dos.shapeColor = "green";
    cuatro.shapeColor = "green";
  }
  
   //BOUNCE OFF - REBOTE
  if(tres.x - cuatro.x <= tres.width/2 + cuatro.width/2 && cuatro.x - tres.x <= tres.width/2 + cuatro.width/2 && 
    tres.y - cuatro.y <= tres.width/2 + cuatro.width/2 && cuatro.y - tres.y <= tres.width/2 + cuatro.width/2){
    tres.velocityY = tres.velocityY*(-1)
    cuatro.velocityY = cuatro.velocityY*(-1)
  }
  else {
   
  }
  drawSprites(); 
}

function isTouching (objeto1, objeto2){
  //IS TOUCHING -- CUANDO SE TOCAN
  if(objeto1.x - objeto2.x <= objeto1.width/2 + objeto2.width/2 && objeto2.x - objeto1.x <= objeto1.width/2 + objeto2.width/2 && 
    objeto1.y - objeto2.y <= objeto1.width/2 + objeto2.width/2 && objeto2.y - objeto1.y <= objeto1.width/2 + objeto2.width/2){
     return true;
  }
  else {
     return false;
  }
}
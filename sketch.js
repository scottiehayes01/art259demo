function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('program');
  background(220);
  
}

function draw() {

  
  console.log(mouseX,mouseY);
   
}

function mouseDragged(){
  fill(0);
    ellipse(mouseX, mouseY, 5);
}


function keyPressed(){
  background(random(255),random(255),random(255));
  fill(random(255),random(255),random(255));
}
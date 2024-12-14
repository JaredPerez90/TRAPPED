function setup() {
  createCanvas(400, 400);
  
  x1 = 210
  y1 = 200
  y2 = 0
  y3 = 400
  color1 = ('white')
}

function draw() {
  background('black');
  strokeWeight(3)
  fill(color1)
  
  
  stroke(color1)
  fill(color1)
  for( x = 10;x < width;x = x + 40){
  beginShape()
  curveVertex(mouseX,mouseY)
  curveVertex(x,y2)
  curveVertex(x,y3)
  curveVertex(mouseX,mouseY)
  endShape()
  }
    
   noFill()
  stroke('pink')
  beginShape()
  vertex(x1,y2)
  vertex(y2,y1)
  vertex(x1,y3)
  vertex(y3,y1)
  endShape(CLOSE)
  
  beginShape()
  vertex(x1,y2)
  vertex(mouseX,y1)
  endShape()
  
  beginShape()
  vertex(x1,y3)
  vertex(mouseX,y1)
  endShape()
  
  beginShape()
  vertex(100,105)
  vertex(mouseX,y1)
  endShape()
  
  beginShape()
  vertex(306,102)
  vertex(mouseX,y1)
  endShape()
  
  beginShape()
  vertex(50,250)
  vertex(mouseX,y1)
  endShape()
  
   beginShape()
  vertex(350,250)
  vertex(mouseX,y1)
  endShape()
  
  for(var y = 10;y < height; y = y + 20){
    fill('black')
    stroke(color1)
    line(y2,y,y3,y)
  }
}
var shades =[10,20,45,25,60];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  colorMode(HSB);
  noStroke();
  
  fill(shades[0], 100, 100);
  rect(0*width/5, 0, width/5, height);
  
  fill(shades[1], 100, 100);
  rect(1*width/5, 0, width/5, height);
  
  fill(shades[2], 100, 100);
  rect(2*width/5, 0, width/5, height);
  
  fill(shades[3], 100, 100);
  rect(3*width/5, 0, width/5, height);
  
  fill(shades[4], 100, 100);
  rect(4*width/5, 0, width/5, height);
}

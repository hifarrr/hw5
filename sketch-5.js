var circle = {
  x: 100, 
  y: 100,
  vx: 3,
  vy: 4,
  r: 10
};

var circle2 = {
  x: 120, 
  y: 160,
  vx: 3,
  vy: 4,
  r: 10
};


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  paint(circle);
  paint(circle2);
  
  move(circle);
  move(circle2);
  
  bounce(circle);
  bounce(circle2);
	
}

function paint(circle) {
  ellipse(circle.x, circle.y, circle.r * 2, circle.r * 2);
}

function move(circle) {
  circle.x += circle.vx; // circle.x = circle.x + circle.vx
  circle.y += circle.vy;
}

function bounce(circle) {
  if (circle.x > width || circle.x < 0) {
    circle.vx =- circle.vx;
  }
  if (circle.y > height || circle.y < 0) {
    circle.vy =- circle.vy;
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    circle.vy += 2;
		circle2.vy += 2;
  } else if (keyCode === DOWN_ARROW) {
    circle.vy -= 2;
		circle.vy -= 2;
  }

function setup() {
	createCanvas(400,400);
	background(88, 24, 69);
}

function draw() {
	noStroke();
	fill(255, 195, 0);
	triangle(200,0,0,400,400,400);
	triangle(200,125,100,325,300,325);
	fill(218, 247, 166);
	triangle(200,125,100,325,200,250);
	fill(255, 87, 51);
	triangle(200,125,300,325,200,250);
	fill(199, 0, 57);
	triangle(100,325,300,325,200,250);
	fill(88, 24, 69);
	triangle(200,200,150,287.5,250,287.5);
}

function setup() {
	createCanvas(400,400);
	background(255);
}

function draw() {
	fill(236, 240, 241);
	rect(0,0,200,200);
	fill(189, 195, 199);
	rect(200,0,200,200);
	fill(52, 73, 94);
	rect(0,200,200,200);
	fill(211, 84, 0);
	rect(200,200,200,200);
	
	var x=0;y=0;
	while(x<width*2&y<height*2){
  	x+=5;
		y+=5;
		line(x,0,x,400);
		line(200,y,400,y);
		line(0,y+200,200,y+200);
		line(0,y+205,x,200);
		line(200,400-y,200+x,400);	
	}

}
	

var shades =[10,20,45,25,60,85,100,150,200];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  colorMode(HSB);
  noStroke();
	for(var i=0; i<shades.length;i++){
  	fill(shades[i],100,100);
		rect(i*width/shades.length,0,width/shades.length,height);
		shades[shades.length-1] = mouseY;
	}
}

var shades =[10,20,45,25,60,85,100,150,300];

function setup() {
  createCanvas(400, 400);
}

var x=0
function draw() {
  colorMode(HSB);
  noStroke();
	for(var i=0; i<shades.length;i++){
  	fill(shades[i],100,100);
		rect(x+i*width/shades.length,0,width/shades.length,height);
	}
  x=x+2;
}



var sizes = [3.8, 9.5, 10, 5.3, 112,94.5,40,38.8];
var h=[5,10,20,40,80,160,320];

function setup() {
  createCanvas(1000, 600);
  background(0);
  noStroke();
}

function draw(){
	 background(0);
	 for (var i = 0; i < sizes.length; i += 1) {
		colorMode(HSB);
		fill(h[i],30,100);
    ellipse(50+i*110, height/2+random(height/10), sizes[i], sizes[i]);
  }
}
	

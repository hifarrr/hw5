var sizes = [40, 70, 90, 30, 60,20,35,75];
var h=[5,10,20,40,80,160,320];

function setup() {
  createCanvas(1000, 600);
  background(0);

  noStroke();
    
  for (var i = 0; i < sizes.length; i += 1) {
    ellipse(50+i*100, height/2, sizes[i], sizes[i]);
		colorMode(HSB);
		fill(h[i],30,100);
  }

}

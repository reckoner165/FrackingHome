 

function setup() {
	
	var can = createCanvas(500, 300);
	can.parent("box");
	background(0,10,10,1);
	translate(width/2, height/2);

}

var n = 2;
function draw() {
	
	// background(0);
	translate(-width/2, -height/2);
	clear();
	translate(width/2, height/2);
	
	var a = 100;
	var b = 100;
	
	stroke(160,50,50);
	noFill();
	beginShape();
	clear();
	for(var angle = 0; angle < TWO_PI; angle+= 0.01) { 

	// var x = r * cos(a);
	// var y = r * sin(a);

		var na = 2/n;
		var x = pow(abs(cos(angle)), na) * a * sgn(cos(angle));
		var y = pow(abs(sin(angle)), na) * b * sgn(sin(angle));

		vertex(x,y);
	}	
	endShape(CLOSE);
	

		

} 	

function sgn(x) {

	var y = x/abs(x);
	return y;
}

function mouseWheel(event) {
  
  //move the square according to the vertical scroll amount
  n += event.delta*0.01;

  if (n >= 20) {
  	n = 20;
  } else if (n <= 0.02) {
  	n = 0.02;
  } else {
  	n = n;
  }
  //uncomment to block page scrolling
  return false;
}
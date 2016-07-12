var angle; 

function setup() {
	
	angle = 0.45;
	
	var can = createCanvas(640, 340);
	can.parent("box");
	
	
	

}

function draw() {

	background(0,10,10,0);
	
	clear();
	stroke(160,50,50);
	push();
	translate(200,height);
	branch(90,3);	
	pop();
	push();
	translate(280,height);
	branch(70,4);
	pop();
	push();
	translate(360,height);
	branch(75,3);
	pop();
	push();
	translate(440,height);
	branch(80,4.5);
	pop();
	
	
	
		

} 	

function branch(len,strokeW) {
	strokeWeight(strokeW)
	line(0,0,0,-len);
		translate(0,-len);

	if (len > 3) {
		
		push();
		rotate(angle);
		branch(len*0.72,strokeW*0.8);
		pop();
		push();
		rotate(-angle);
		branch(len*0.72,strokeW*0.75);
		pop();
	
	}
	

}


function mouseWheel(event) {

	
	angle += event.delta*0.001;

  if (angle >= TWO_PI) {
  	angle = TWO_PI;
  } else if (angle <= 0) {
  	angle = 0;
  } else {
  	angle = angle;
  }
 
  
  return false;
}

